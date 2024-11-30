:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokka'
.. highlight: bash

prokka
======

.. conda:recipe:: prokka
   :replaces_section_title:
   :noindex:

   Rapid annotation of prokaryotic genomes

   :homepage: https://github.com/tseemann/prokka
   :license: GPL / GPL-3.0-only
   :recipe: /`prokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka/meta.yaml>`_
   :links: biotools: :biotools:`prokka`, doi: :doi:`10.1093/bioinformatics/btu153`, usegalaxy-eu: :usegalaxy-eu:`prokka`

   


.. conda:package:: prokka

   |downloads_prokka| |docker_prokka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.6-5</code>,  <code>1.14.6-4</code>,  <code>1.14.6-3</code>,  <code>1.14.6-2</code>,  <code>1.14.6-1</code>,  <code>1.14.6-0</code>,  <code>1.14.5-1</code>,  <code>1.14.5-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.14.6-5``,  ``1.14.6-4``,  ``1.14.6-3``,  ``1.14.6-2``,  ``1.14.6-1``,  ``1.14.6-0``,  ``1.14.5-1``,  ``1.14.5-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.7-0``,  ``1.13.4-0``,  ``1.13.3-0``,  ``1.13-4``,  ``1.13-3``,  ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: ``>=1.2``
   :depends barrnap: ``>=0.7``
   :depends blast: ``>=2.7.1``
   :depends hmmer: ``>=3.1b2``
   :depends infernal: ``>=1.1.2``
   :depends minced: ``>=0.3``
   :depends parallel: ``>=20180522``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-xml-simple: 
   :depends prodigal: ``>=2.6``
   :depends tbl2asn-forever: ``>=25.7``
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

      mamba install prokka

   and update with::

      mamba update prokka

  To create a new environment, run::

      mamba create --name myenvname prokka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prokka:<tag>

   (see `prokka/tags`_ for valid values for ``<tag>``)


.. |downloads_prokka| image:: https://img.shields.io/conda/dn/bioconda/prokka.svg?style=flat
   :target: https://anaconda.org/bioconda/prokka
   :alt:   (downloads)
.. |docker_prokka| image:: https://quay.io/repository/biocontainers/prokka/status
   :target: https://quay.io/repository/biocontainers/prokka
.. _`prokka/tags`: https://quay.io/repository/biocontainers/prokka?tab=tags


.. raw:: html

    <script>
        var package = "prokka";
        var versions = ["1.14.6","1.14.6","1.14.6","1.14.6","1.14.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokka/README.html