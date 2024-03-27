:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcftools'
.. highlight: bash

vcftools
========

.. conda:recipe:: vcftools
   :replaces_section_title:
   :noindex:

   A set of tools written in Perl and C\+\+ for working with VCF files.

   :homepage: https://vcftools.github.io/
   :license: LGPL
   :recipe: /`vcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools/meta.yaml>`_
   :links: biotools: :biotools:`vcftools`

   


.. conda:package:: vcftools

   |downloads_vcftools| |docker_vcftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.16-10</code>,  <code>0.1.16-9</code>,  <code>0.1.16-8</code>,  <code>0.1.16-7</code>,  <code>0.1.16-6</code>,  <code>0.1.16-5</code>,  <code>0.1.16-4</code>,  <code>0.1.16-3</code>,  <code>0.1.16-2</code>,  </span></summary>
      

      ``0.1.16-10``,  ``0.1.16-9``,  ``0.1.16-8``,  ``0.1.16-7``,  ``0.1.16-6``,  ``0.1.16-5``,  ``0.1.16-4``,  ``0.1.16-3``,  ``0.1.16-2``,  ``0.1.15-2``,  ``0.1.15-1``,  ``0.1.15-0``,  ``0.1.14-5``,  ``0.1.14-4``,  ``0.1.14-3``,  ``0.1.14-2``,  ``0.1.14-1``,  ``0.1.14-0``,  ``0.1.12b-3``,  ``0.1.12b-2``,  ``0.1.12b-1``,  ``0.1.12b-0``,  ``0.1.11-2``,  ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-1``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: 
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

      mamba install vcftools

   and update with::

      mamba update vcftools

  To create a new environment, run::

      mamba create --name myenvname vcftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcftools:<tag>

   (see `vcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_vcftools| image:: https://img.shields.io/conda/dn/bioconda/vcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/vcftools
   :alt:   (downloads)
.. |docker_vcftools| image:: https://quay.io/repository/biocontainers/vcftools/status
   :target: https://quay.io/repository/biocontainers/vcftools
.. _`vcftools/tags`: https://quay.io/repository/biocontainers/vcftools?tab=tags


.. raw:: html

    <script>
        var package = "vcftools";
        var versions = ["0.1.16","0.1.16","0.1.16","0.1.16","0.1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftools/README.html