:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsift'
.. highlight: bash

samsift
=======

.. conda:recipe:: samsift
   :replaces_section_title:
   :noindex:

   Advanced filtering and tagging of SAM\/BAM alignments using Python expressions.

   :homepage: https://github.com/karel-brinda/samsift
   :license: MIT
   :recipe: /`samsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift/meta.yaml>`_

   


.. conda:package:: samsift

   |downloads_samsift| |docker_samsift|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5-3</code>,  <code>0.2.5-2</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-1</code>,  </span></summary>
      

      ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pysam: 
   :depends python: ``>=3``
   :depends python-dateutil: 
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

      mamba install samsift

   and update with::

      mamba update samsift

  To create a new environment, run::

      mamba create --name myenvname samsift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samsift:<tag>

   (see `samsift/tags`_ for valid values for ``<tag>``)


.. |downloads_samsift| image:: https://img.shields.io/conda/dn/bioconda/samsift.svg?style=flat
   :target: https://anaconda.org/bioconda/samsift
   :alt:   (downloads)
.. |docker_samsift| image:: https://quay.io/repository/biocontainers/samsift/status
   :target: https://quay.io/repository/biocontainers/samsift
.. _`samsift/tags`: https://quay.io/repository/biocontainers/samsift?tab=tags


.. raw:: html

    <script>
        var package = "samsift";
        var versions = ["0.2.5","0.2.5","0.2.5","0.2.5","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsift/README.html