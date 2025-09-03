:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplc'
.. highlight: bash

deeplc
======

.. conda:recipe:: deeplc
   :replaces_section_title:
   :noindex:

   DeepLC\: Retention time prediction for \(modified\) peptides using Deep Learning.

   :homepage: https://compomics.github.io/projects/DeepLC
   :documentation: https://github.com/compomics/DeepLC/blob/v3.1.13/README.md
   
   :developer docs: https://github.com/compomics/DeepLC
   :license: APACHE / Apache-2.0
   :recipe: /`deeplc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01301-5`, biotools: :biotools:`deeplc`

   


.. conda:package:: deeplc

   |downloads_deeplc| |docker_deeplc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.13-0</code>,  <code>3.1.10-0</code>,  <code>3.1.9-0</code>,  <code>3.1.8-0</code>,  <code>3.1.7-0</code>,  <code>3.1.5-0</code>,  <code>3.1.3-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  </span></summary>
      

      ``3.1.13-0``,  ``3.1.10-0``,  ``3.1.9-0``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.5-0``,  ``3.1.3-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.4-0``,  ``3.0.2-0``,  ``2.2.38-0``,  ``2.2.36-0``,  ``2.2.27-0``,  ``2.2.26-0``,  ``2.2.22-0``,  ``2.2.20-0``,  ``2.2.18-0``,  ``2.2.14-0``,  ``2.2.12-0``,  ``2.2.9-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``1.1.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.36-0``,  ``0.1.35-0``,  ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.31-0``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends deeplcretrainer: ``>=1,<2``
   :depends numpy: ``>=1.17,<3``
   :depends pandas: ``>=0.25,<3``
   :depends psm-utils: ``>=1,<2``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``>=1.2.0,<2``
   :depends tensorflow: ``>=2.15.0,<3``
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

      mamba install deeplc

   and update with::

      mamba update deeplc

  To create a new environment, run::

      mamba create --name myenvname deeplc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deeplc:<tag>

   (see `deeplc/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplc| image:: https://img.shields.io/conda/dn/bioconda/deeplc.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplc
   :alt:   (downloads)
.. |docker_deeplc| image:: https://quay.io/repository/biocontainers/deeplc/status
   :target: https://quay.io/repository/biocontainers/deeplc
.. _`deeplc/tags`: https://quay.io/repository/biocontainers/deeplc?tab=tags


.. raw:: html

    <script>
        var package = "deeplc";
        var versions = ["3.1.13","3.1.10","3.1.9","3.1.8","3.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplc/README.html