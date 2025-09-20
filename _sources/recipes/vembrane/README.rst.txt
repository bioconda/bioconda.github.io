:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vembrane'
.. highlight: bash

vembrane
========

.. conda:recipe:: vembrane
   :replaces_section_title:
   :noindex:

   Filter VCF\/BCF files with Python expressions.

   :homepage: https://github.com/vembrane/vembrane
   :license: MIT / MIT
   :recipe: /`vembrane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vembrane/meta.yaml>`_

   


.. conda:package:: vembrane

   |downloads_vembrane| |docker_vembrane|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``2.3.4-0``,  ``2.3.3-0``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends asttokens: ``>=2.4.1,<3``
   :depends cyvcf2: ``>=0.31.1``
   :depends intervaltree: ``>=3.1,<4``
   :depends networkx: ``>=3.0,<4``
   :depends numpy: ``>=2.0,<3.0``
   :depends obonet: ``>=1.1.1,<2``
   :depends pysam: ``>=0.22,<0.25``
   :depends python: ``>=3.12``
   :depends pyyaml: ``>=6.0,<7``
   :depends typing-extensions: ``>=4.12.2,<5``
   :depends yte: ``>=1.6.0,<2``
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

      mamba install vembrane

   and update with::

      mamba update vembrane

  To create a new environment, run::

      mamba create --name myenvname vembrane

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vembrane:<tag>

   (see `vembrane/tags`_ for valid values for ``<tag>``)


.. |downloads_vembrane| image:: https://img.shields.io/conda/dn/bioconda/vembrane.svg?style=flat
   :target: https://anaconda.org/bioconda/vembrane
   :alt:   (downloads)
.. |docker_vembrane| image:: https://quay.io/repository/biocontainers/vembrane/status
   :target: https://quay.io/repository/biocontainers/vembrane
.. _`vembrane/tags`: https://quay.io/repository/biocontainers/vembrane?tab=tags


.. raw:: html

    <script>
        var package = "vembrane";
        var versions = ["2.3.4","2.3.3","2.2.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vembrane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vembrane/README.html