:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kaiju'
.. highlight: bash

kaiju
=====

.. conda:recipe:: kaiju
   :replaces_section_title:
   :noindex:

   Fast and sensitive taxonomic classification for metagenomics

   :homepage: http://kaiju.binf.ku.dk/
   :license: GNU GPL v3
   :recipe: /`kaiju <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju/meta.yaml>`_
   :links: biotools: :biotools:`kaiju`, doi: :doi:`10.1038/ncomms11257`

   


.. conda:package:: kaiju

   |downloads_kaiju| |docker_kaiju|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.2-3</code>,  <code>1.9.2-2</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  <code>1.8.1-1</code>,  </span></summary>
      

      ``1.9.2-3``,  ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-2``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends python: 
   :depends wget: 
   :depends zlib: 
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

      mamba install kaiju

   and update with::

      mamba update kaiju

  To create a new environment, run::

      mamba create --name myenvname kaiju

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kaiju:<tag>

   (see `kaiju/tags`_ for valid values for ``<tag>``)


.. |downloads_kaiju| image:: https://img.shields.io/conda/dn/bioconda/kaiju.svg?style=flat
   :target: https://anaconda.org/bioconda/kaiju
   :alt:   (downloads)
.. |docker_kaiju| image:: https://quay.io/repository/biocontainers/kaiju/status
   :target: https://quay.io/repository/biocontainers/kaiju
.. _`kaiju/tags`: https://quay.io/repository/biocontainers/kaiju?tab=tags


.. raw:: html

    <script>
        var package = "kaiju";
        var versions = ["1.9.2","1.9.2","1.9.2","1.9.2","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaiju/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaiju/README.html