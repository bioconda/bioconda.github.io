:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfpy'
.. highlight: bash

vcfpy
=====

.. conda:recipe:: vcfpy
   :replaces_section_title:
   :noindex:

   Python 3 VCF library with good support for both reading and writing.

   :homepage: https://github.com/bihealth/vcfpy
   :documentation: https://vcfpy.readthedocs.io/en/stable
   
   :license: MIT / MIT
   :recipe: /`vcfpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy/meta.yaml>`_

   


.. conda:package:: vcfpy

   |downloads_vcfpy| |docker_vcfpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.13.8-0</code>,  <code>0.13.6-0</code>,  <code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.2-0</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.13.8-0``,  ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-3``,  ``0.11.2-3``,  ``0.11.2-2``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.10,<3.14``
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

      mamba install vcfpy

   and update with::

      mamba update vcfpy

  To create a new environment, run::

      mamba create --name myenvname vcfpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfpy:<tag>

   (see `vcfpy/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfpy| image:: https://img.shields.io/conda/dn/bioconda/vcfpy.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfpy
   :alt:   (downloads)
.. |docker_vcfpy| image:: https://quay.io/repository/biocontainers/vcfpy/status
   :target: https://quay.io/repository/biocontainers/vcfpy
.. _`vcfpy/tags`: https://quay.io/repository/biocontainers/vcfpy?tab=tags


.. raw:: html

    <script>
        var package = "vcfpy";
        var versions = ["0.14.2","0.13.8","0.13.6","0.13.5","0.13.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy/README.html