:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymzml'
.. highlight: bash

pymzml
======

.. conda:recipe:: pymzml
   :replaces_section_title:
   :noindex:

   high\-throughput mzML parsing

   :homepage: https://github.com/pymzml/pymzML
   :license: MIT
   :recipe: /`pymzml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymzml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymzml/meta.yaml>`_
   :links: biotools: :biotools:`pymzml`

   


.. conda:package:: pymzml

   |downloads_pymzml| |docker_pymzml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.7-0</code>,  <code>2.4.6-0</code>,  <code>2.4.5-0</code>,  <code>2.4.4-0</code>,  <code>2.4.3-0</code>,  <code>2.4.2-0</code>,  </span></summary>
      

      ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.0.6-2``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.5-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.5-2``,  ``0.7.5-1``,  ``0.7.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: 
   :depends plotly: 
   :depends python: ``>=3.7``
   :depends regex: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pymzml

   and update with::

      mamba update pymzml

  To create a new environment, run::

      mamba create --name myenvname pymzml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymzml:<tag>

   (see `pymzml/tags`_ for valid values for ``<tag>``)


.. |downloads_pymzml| image:: https://img.shields.io/conda/dn/bioconda/pymzml.svg?style=flat
   :target: https://anaconda.org/bioconda/pymzml
   :alt:   (downloads)
.. |docker_pymzml| image:: https://quay.io/repository/biocontainers/pymzml/status
   :target: https://quay.io/repository/biocontainers/pymzml
.. _`pymzml/tags`: https://quay.io/repository/biocontainers/pymzml?tab=tags


.. raw:: html

    <script>
        var package = "pymzml";
        var versions = ["2.5.2","2.5.1","2.5.0","2.4.7","2.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymzml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymzml/README.html