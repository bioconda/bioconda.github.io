:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio_hansel'
.. highlight: bash

bio_hansel
==========

.. conda:recipe:: bio_hansel
   :replaces_section_title:
   :noindex:

   Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes.

   :homepage: https://github.com/phac-nml/biohansel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`bio_hansel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel/meta.yaml>`_

   \'Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes. \'
   \'Includes schemes for Heidelberg and Enteritidis subtyping.\'



.. conda:package:: bio_hansel

   |downloads_bio_hansel| |docker_bio_hansel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.6.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``0.2.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.20.1``
   :depends pyahocorasick: ``>=1.1.6``
   :depends python: ``>=3``
   :depends rich: 
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

      mamba install bio_hansel

   and update with::

      mamba update bio_hansel

  To create a new environment, run::

      mamba create --name myenvname bio_hansel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio_hansel:<tag>

   (see `bio_hansel/tags`_ for valid values for ``<tag>``)


.. |downloads_bio_hansel| image:: https://img.shields.io/conda/dn/bioconda/bio_hansel.svg?style=flat
   :target: https://anaconda.org/bioconda/bio_hansel
   :alt:   (downloads)
.. |docker_bio_hansel| image:: https://quay.io/repository/biocontainers/bio_hansel/status
   :target: https://quay.io/repository/biocontainers/bio_hansel
.. _`bio_hansel/tags`: https://quay.io/repository/biocontainers/bio_hansel?tab=tags


.. raw:: html

    <script>
        var package = "bio_hansel";
        var versions = ["2.6.1","2.5.0","2.4.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_hansel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_hansel/README.html