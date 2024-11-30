:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmap'
.. highlight: bash

gmap
====

.. conda:recipe:: gmap
   :replaces_section_title:
   :noindex:

   Genomic mapping and alignment program for mRNA and EST sequences.

   :homepage: http://research-pub.gene.com/gmap
   :license: APACHE / Apache-2.0
   :recipe: /`gmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap/meta.yaml>`_
   :links: biotools: :biotools:`gmap`, biotools: :biotools:`gsnap`, doi: :doi:`10.1093/bioinformatics/bti310`, doi: :doi:`10.1093/bioinformatics/btq057`

   


.. conda:package:: gmap

   |downloads_gmap| |docker_gmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.11.20-0</code>,  <code>2024.10.20-0</code>,  <code>2024.10.10-0</code>,  <code>2024.09.18-0</code>,  <code>2024.08.14-0</code>,  <code>2024.05.20-0</code>,  <code>2024.05.07-0</code>,  <code>2024.03.15-2</code>,  <code>2024.03.15-1</code>,  </span></summary>
      

      ``2024.11.20-0``,  ``2024.10.20-0``,  ``2024.10.10-0``,  ``2024.09.18-0``,  ``2024.08.14-0``,  ``2024.05.20-0``,  ``2024.05.07-0``,  ``2024.03.15-2``,  ``2024.03.15-1``,  ``2024.03.15-0``,  ``2024.02.22-0``,  ``2023.12.01-0``,  ``2023.10.10-1``,  ``2023.10.10-0``,  ``2023.10.01-0``,  ``2023.07.20-1``,  ``2023.07.20-0``,  ``2023.06.01-0``,  ``2023.04.28-1``,  ``2023.04.28-0``,  ``2023.03.24-1``,  ``2023.03.24-0``,  ``2021.08.25-2``,  ``2021.08.25-1``,  ``2021.08.25-0``,  ``2021.05.27-0``,  ``2021.03.08-0``,  ``2021.02.22-3``,  ``2021.02.22-1``,  ``2021.02.22-0``,  ``2020.10.14-0``,  ``2020.06.30-0``,  ``2020.06.01-1``,  ``2020.06.01-0``,  ``2020.04.08-1``,  ``2020.04.08-0``,  ``2019.09.12-1``,  ``2019.09.12-0``,  ``2019.06.10-0``,  ``2019.02.26-0``,  ``2018.07.04-0``,  ``2018.03.25-2``,  ``2018.03.25-1``,  ``2018.03.25-0``,  ``2017.11.15-4``,  ``2017.11.15-3``,  ``2017.11.15-2``,  ``2017.11.15-1``,  ``2017.11.15-0``,  ``2017.10.30-6``,  ``2017.10.30-5``,  ``2017.10.30-4``,  ``2017.10.30-3``,  ``2017.10.30-2``,  ``2017.10.30-1``,  ``2017.10.30-0``,  ``2017.09.30-7``,  ``2017.09.30-6``,  ``2017.09.30-5``,  ``2017.09.30-4``,  ``2017.09.30-3``,  ``2017.09.30-2``,  ``2017.09.30-1``,  ``2017.09.30-0``,  ``2017.05.08-6``,  ``2017.05.08-5``,  ``2017.05.08-4``,  ``2017.05.08-3``,  ``2017.05.08-2``,  ``2017.05.08-1``,  ``2017.05.08-0``,  ``2017.02.15-3``,  ``2017.02.15-2``,  ``2017.02.15-1``,  ``2016.09.23-3``,  ``2016.09.23-2``,  ``2016.09.23-1``,  ``2016.09.23-0``,  ``2015.12.31-5``,  ``2015.12.31-4``,  ``2015.12.31-3``,  ``2015.12.31-2``,  ``2015.12.31-1``,  ``2015.12.31-0``,  ``2015.09.10-2``,  ``2015.09.10-1``,  ``2015.09.10-0``,  ``2014.12.28-6``,  ``2014.12.28-5``,  ``2014.12.23-6``,  ``2014.12.23-5``,  ``2014.12.23-4``,  ``2014.12.23-3``,  ``2014.12.23-2``,  ``2014.12.23-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-file-util: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gmap

   and update with::

      mamba update gmap

  To create a new environment, run::

      mamba create --name myenvname gmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gmap:<tag>

   (see `gmap/tags`_ for valid values for ``<tag>``)


.. |downloads_gmap| image:: https://img.shields.io/conda/dn/bioconda/gmap.svg?style=flat
   :target: https://anaconda.org/bioconda/gmap
   :alt:   (downloads)
.. |docker_gmap| image:: https://quay.io/repository/biocontainers/gmap/status
   :target: https://quay.io/repository/biocontainers/gmap
.. _`gmap/tags`: https://quay.io/repository/biocontainers/gmap?tab=tags


.. raw:: html

    <script>
        var package = "gmap";
        var versions = ["2024.11.20","2024.10.20","2024.10.10","2024.09.18","2024.08.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap/README.html