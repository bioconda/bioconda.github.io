:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkqc'
.. highlight: bash

checkqc
=======

.. conda:recipe:: checkqc
   :replaces_section_title:
   :noindex:

   A simple program to parse Illumina NGS data and check it for quality criteria.

   :homepage: https://www.github.com/Molmed/checkQC
   :documentation: https://checkqc.readthedocs.io/en/latest/
   
   :license: GPL3 / GPLv3
   :recipe: /`checkqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc/meta.yaml>`_

   


.. conda:package:: checkqc

   |downloads_checkqc| |docker_checkqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.7-0</code>,  <code>4.0.6-0</code>,  <code>4.0.5-0</code>,  <code>4.0.4-0</code>,  <code>4.0.1-0</code>,  <code>3.8.2-1</code>,  <code>3.8.2-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  </span></summary>
      

      ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.1-0``,  ``3.8.2-1``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.6-0``,  ``3.6.5-0``,  ``3.6.4-0``,  ``3.6.3-0``,  ``3.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=8.1.1``
   :depends illumina-interop: ``>=1.2.4``
   :depends jsonschema: 
   :depends numpy: ``>=1.26.4``
   :depends pandas: ``>=2.2.2``
   :depends python: ``>=3.6,<3.11``
   :depends pyyaml: ``>=6.0``
   :depends sample-sheet: ``>=0.13.0``
   :depends tornado: ``>=6.3.2``
   :depends xmltodict: ``>=0.13.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install checkqc

   and update with::

      mamba update checkqc

  To create a new environment, run::

      mamba create --name myenvname checkqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/checkqc:<tag>

   (see `checkqc/tags`_ for valid values for ``<tag>``)


.. |downloads_checkqc| image:: https://img.shields.io/conda/dn/bioconda/checkqc.svg?style=flat
   :target: https://anaconda.org/bioconda/checkqc
   :alt:   (downloads)
.. |docker_checkqc| image:: https://quay.io/repository/biocontainers/checkqc/status
   :target: https://quay.io/repository/biocontainers/checkqc
.. _`checkqc/tags`: https://quay.io/repository/biocontainers/checkqc?tab=tags


.. raw:: html

    <script>
        var package = "checkqc";
        var versions = ["4.0.7","4.0.6","4.0.5","4.0.4","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkqc/README.html