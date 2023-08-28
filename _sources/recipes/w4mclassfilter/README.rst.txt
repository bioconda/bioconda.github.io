:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'w4mclassfilter'
.. highlight: bash

w4mclassfilter
==============

.. conda:recipe:: w4mclassfilter
   :replaces_section_title:
   :noindex:

   Filter Workflow4Metabolomics feature list\, optionally imputing NA values.

   :homepage: https://github.com/HegemanLab/w4mclassfilter
   :license: MIT
   :recipe: /`w4mclassfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter/meta.yaml>`_

   Filter Workflow4Metabolomics dataMatrix\, sampleMetadata\, and variableMetadata files by sample\-class\, eliminating zero\-variance rows and columns from the data\-matrix and\, optionally\, imputing NA values. MIT Licence allows redistribution.


.. conda:package:: w4mclassfilter

   |downloads_w4mclassfilter| |docker_w4mclassfilter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.98.19-3</code>,  <code>0.98.19-2</code>,  <code>0.98.19-1</code>,  <code>0.98.19-0</code>,  <code>0.98.18-1</code>,  <code>0.98.18-0</code>,  <code>0.98.17-0</code>,  <code>0.98.16-0</code>,  <code>0.98.15-0</code>,  </span></summary>
      

      ``0.98.19-3``,  ``0.98.19-2``,  ``0.98.19-1``,  ``0.98.19-0``,  ``0.98.18-1``,  ``0.98.18-0``,  ``0.98.17-0``,  ``0.98.16-0``,  ``0.98.15-0``,  ``0.98.14-0``,  ``0.98.13-0``,  ``0.98.12-0``,  ``0.98.9-0``,  ``0.98.8-1``,  ``0.98.7-1``,  ``0.98.7-0``,  ``0.98.6-1``,  ``0.98.6-0``,  ``0.98.3-1``,  ``0.98.3-0``,  ``0.98.2-1``,  ``0.98.2-0``,  ``0.98.1-1``,  ``0.98.1-0``,  ``0.98.0-1``,  ``0.98.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
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

      mamba install w4mclassfilter

   and update with::

      mamba update w4mclassfilter

  To create a new environment, run::

      mamba create --name myenvname w4mclassfilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/w4mclassfilter:<tag>

   (see `w4mclassfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_w4mclassfilter| image:: https://img.shields.io/conda/dn/bioconda/w4mclassfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/w4mclassfilter
   :alt:   (downloads)
.. |docker_w4mclassfilter| image:: https://quay.io/repository/biocontainers/w4mclassfilter/status
   :target: https://quay.io/repository/biocontainers/w4mclassfilter
.. _`w4mclassfilter/tags`: https://quay.io/repository/biocontainers/w4mclassfilter?tab=tags


.. raw:: html

    <script>
        var package = "w4mclassfilter";
        var versions = ["0.98.19","0.98.19","0.98.19","0.98.19","0.98.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/w4mclassfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/w4mclassfilter/README.html