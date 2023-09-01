:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snoscan'
.. highlight: bash

snoscan
=======

.. conda:recipe:: snoscan
   :replaces_section_title:
   :noindex:

   Search for C\/D box methylation guide snoRNA genes in a genomic sequence

   :homepage: http://lowelab.ucsc.edu/snoscan
   :license: GNU General Public License, version 2
   :recipe: /`snoscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan/meta.yaml>`_
   :links: biotools: :biotools:`snoscan`

   


.. conda:package:: snoscan

   |downloads_snoscan| |docker_snoscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9b-3</code>,  </span></summary>
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9b-3``,  ``0.9b-2``,  ``0.9b-1``,  ``0.9b-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
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

      mamba install snoscan

   and update with::

      mamba update snoscan

  To create a new environment, run::

      mamba create --name myenvname snoscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snoscan:<tag>

   (see `snoscan/tags`_ for valid values for ``<tag>``)


.. |downloads_snoscan| image:: https://img.shields.io/conda/dn/bioconda/snoscan.svg?style=flat
   :target: https://anaconda.org/bioconda/snoscan
   :alt:   (downloads)
.. |docker_snoscan| image:: https://quay.io/repository/biocontainers/snoscan/status
   :target: https://quay.io/repository/biocontainers/snoscan
.. _`snoscan/tags`: https://quay.io/repository/biocontainers/snoscan?tab=tags


.. raw:: html

    <script>
        var package = "snoscan";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snoscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snoscan/README.html