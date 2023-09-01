:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtglink'
.. highlight: bash

mtglink
=======

.. conda:recipe:: mtglink
   :replaces_section_title:
   :noindex:

   MTG\-link is a local assembly tool for linked\-read data

   :homepage: https://github.com/anne-gcd/MTG-Link
   :license: file
   :recipe: /`mtglink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtglink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtglink/meta.yaml>`_

   


.. conda:package:: mtglink

   |downloads_mtglink| |docker_mtglink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends gfapy: 
   :depends lrez: ``>=2.2.3``
   :depends mindthegap: ``>=2.2.3``
   :depends mummer: 
   :depends pathos: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends regex: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mtglink

   and update with::

      mamba update mtglink

  To create a new environment, run::

      mamba create --name myenvname mtglink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mtglink:<tag>

   (see `mtglink/tags`_ for valid values for ``<tag>``)


.. |downloads_mtglink| image:: https://img.shields.io/conda/dn/bioconda/mtglink.svg?style=flat
   :target: https://anaconda.org/bioconda/mtglink
   :alt:   (downloads)
.. |docker_mtglink| image:: https://quay.io/repository/biocontainers/mtglink/status
   :target: https://quay.io/repository/biocontainers/mtglink
.. _`mtglink/tags`: https://quay.io/repository/biocontainers/mtglink?tab=tags


.. raw:: html

    <script>
        var package = "mtglink";
        var versions = ["2.4.1","2.4.0","2.3.2","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtglink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtglink/README.html