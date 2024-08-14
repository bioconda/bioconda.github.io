:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discosnp'
.. highlight: bash

discosnp
========

.. conda:recipe:: discosnp
   :replaces_section_title:
   :noindex:

   reference\-free small variant caller for short read sequencing data

   :homepage: https://gatb.inria.fr/software/discosnp/
   :license: GNU Affero General Public License v3.0
   :recipe: /`discosnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discosnp/meta.yaml>`_
   :links: biotools: :biotools:`discosnp`, doi: :doi:`10.1093/nar/gkn000`

   


.. conda:package:: discosnp

   |downloads_discosnp| |docker_discosnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.2-4</code>,  <code>2.6.2-3</code>,  <code>2.6.2-2</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.5.4-1</code>,  <code>2.5.4-0</code>,  <code>2.4.4-0</code>,  </span></summary>
      

      ``2.6.2-4``,  ``2.6.2-3``,  ``2.6.2-2``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-1``,  ``2.4.3-0``,  ``2.3.0-7``,  ``2.3.0-6``,  ``2.3.0-5``,  ``2.3.0-4``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.10-1``,  ``2.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.0``
   :depends short-read-connector: 
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

      mamba install discosnp

   and update with::

      mamba update discosnp

  To create a new environment, run::

      mamba create --name myenvname discosnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/discosnp:<tag>

   (see `discosnp/tags`_ for valid values for ``<tag>``)


.. |downloads_discosnp| image:: https://img.shields.io/conda/dn/bioconda/discosnp.svg?style=flat
   :target: https://anaconda.org/bioconda/discosnp
   :alt:   (downloads)
.. |docker_discosnp| image:: https://quay.io/repository/biocontainers/discosnp/status
   :target: https://quay.io/repository/biocontainers/discosnp
.. _`discosnp/tags`: https://quay.io/repository/biocontainers/discosnp?tab=tags


.. raw:: html

    <script>
        var package = "discosnp";
        var versions = ["2.6.2","2.6.2","2.6.2","2.6.2","2.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discosnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discosnp/README.html