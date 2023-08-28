:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'subread'
.. highlight: bash

subread
=======

.. conda:recipe:: subread
   :replaces_section_title:
   :noindex:

   High\-performance read alignment\, quantification\, and mutation discovery

   :homepage: http://subread.sourceforge.net/
   :license: GPL-3.0-only
   :recipe: /`subread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/subread/meta.yaml>`_
   :links: biotools: :biotools:`subread`, usegalaxy-eu: :usegalaxy-eu:`featurecounts`, doi: :doi:`10.1093/nar/gkt214`

   


.. conda:package:: subread

   |downloads_subread| |docker_subread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.6-0</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.0.6-0``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.6.4-1``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0.post3-0``,  ``1.5.0-0``,  ``1.5.0p3-0``,  ``1.4.6p5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install subread

   and update with::

      mamba update subread

  To create a new environment, run::

      mamba create --name myenvname subread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/subread:<tag>

   (see `subread/tags`_ for valid values for ``<tag>``)


.. |downloads_subread| image:: https://img.shields.io/conda/dn/bioconda/subread.svg?style=flat
   :target: https://anaconda.org/bioconda/subread
   :alt:   (downloads)
.. |docker_subread| image:: https://quay.io/repository/biocontainers/subread/status
   :target: https://quay.io/repository/biocontainers/subread
.. _`subread/tags`: https://quay.io/repository/biocontainers/subread?tab=tags


.. raw:: html

    <script>
        var package = "subread";
        var versions = ["2.0.6","2.0.3","2.0.3","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/subread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/subread/README.html