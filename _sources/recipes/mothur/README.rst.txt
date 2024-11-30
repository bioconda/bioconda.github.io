:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mothur'
.. highlight: bash

mothur
======

.. conda:recipe:: mothur
   :replaces_section_title:
   :noindex:

   This project seeks to develop a single piece of open\-source\, expandable software to fill the bioinformatics needs of the microbial ecology community.

   :homepage: http://www.mothur.org
   :developer docs: https://github.com/mothur/mothur
   :license: GPL / GPL-3.0
   :recipe: /`mothur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mothur/meta.yaml>`_
   :links: doi: :doi:`10.1128/AEM.01541-09`, usegalaxy-eu: :usegalaxy-eu:`mothur_get_label`

   


.. conda:package:: mothur

   |downloads_mothur| |docker_mothur|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-3</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.47.0-2</code>,  <code>1.47.0-1</code>,  <code>1.47.0-0</code>,  <code>1.46.1-1</code>,  <code>1.46.1-0</code>,  </span></summary>
      

      ``1.48.0-3``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.47.0-2``,  ``1.47.0-1``,  ``1.47.0-0``,  ``1.46.1-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.45.3-0``,  ``1.44.11-0``,  ``1.44.1-2``,  ``1.44.1-1``,  ``1.44.1-0``,  ``1.44.0-0``,  ``1.43.0-0``,  ``1.42.3-0``,  ``1.42.1-0``,  ``1.42.0-0``,  ``1.41.3-0``,  ``1.41.0-0``,  ``1.40.5-0``,  ``1.39.5-4``,  ``1.39.5-3``,  ``1.39.5-2``,  ``1.39.5-1``,  ``1.39.5-0``,  ``1.38.1.1-0``,  ``1.36.1-2``,  ``1.36.1-1``,  ``1.36.1-0``,  ``1.25.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast-legacy: 
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends readline: ``>=8.2,<9.0a0``
   :depends sra-tools: 
   :depends vsearch: ``2.15.2.*``
   :depends zlib: 
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

      mamba install mothur

   and update with::

      mamba update mothur

  To create a new environment, run::

      mamba create --name myenvname mothur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mothur:<tag>

   (see `mothur/tags`_ for valid values for ``<tag>``)


.. |downloads_mothur| image:: https://img.shields.io/conda/dn/bioconda/mothur.svg?style=flat
   :target: https://anaconda.org/bioconda/mothur
   :alt:   (downloads)
.. |docker_mothur| image:: https://quay.io/repository/biocontainers/mothur/status
   :target: https://quay.io/repository/biocontainers/mothur
.. _`mothur/tags`: https://quay.io/repository/biocontainers/mothur?tab=tags


.. raw:: html

    <script>
        var package = "mothur";
        var versions = ["1.48.0","1.48.0","1.48.0","1.48.0","1.47.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mothur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mothur/README.html