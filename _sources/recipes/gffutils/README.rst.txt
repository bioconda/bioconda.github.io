:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffutils'
.. highlight: bash

gffutils
========

.. conda:recipe:: gffutils
   :replaces_section_title:
   :noindex:

   Work with GFF and GTF files in a flexible database framework

   :homepage: https://github.com/daler/gffutils
   :documentation: http://daler.github.io/gffutils/
   
   :license: MIT / MIT
   :recipe: /`gffutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffutils/meta.yaml>`_
   :links: biotools: :biotools:`GFFutils`

   


.. conda:package:: gffutils

   |downloads_gffutils| |docker_gffutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.1-1</code>,  <code>0.10.1-0</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8.7.1-2</code>,  <code>0.8.7.1-1</code>,  </span></summary>
      

      ``0.12-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.9-1``,  ``0.9-0``,  ``0.8.7.1-2``,  ``0.8.7.1-1``,  ``0.8.7.1-0``,  ``0.8.7-0``,  ``0.8.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends argcomplete: ``>=1.9.4``
   :depends argh: ``>=0.26.2``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends python: 
   :depends simplejson: 
   :depends six: ``>=1.12.0``
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

      mamba install gffutils

   and update with::

      mamba update gffutils

  To create a new environment, run::

      mamba create --name myenvname gffutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gffutils:<tag>

   (see `gffutils/tags`_ for valid values for ``<tag>``)


.. |downloads_gffutils| image:: https://img.shields.io/conda/dn/bioconda/gffutils.svg?style=flat
   :target: https://anaconda.org/bioconda/gffutils
   :alt:   (downloads)
.. |docker_gffutils| image:: https://quay.io/repository/biocontainers/gffutils/status
   :target: https://quay.io/repository/biocontainers/gffutils
.. _`gffutils/tags`: https://quay.io/repository/biocontainers/gffutils?tab=tags


.. raw:: html

    <script>
        var package = "gffutils";
        var versions = ["0.12","0.11.1","0.11.0","0.10.1","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffutils/README.html