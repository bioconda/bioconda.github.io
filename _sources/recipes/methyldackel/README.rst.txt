:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methyldackel'
.. highlight: bash

methyldackel
============

.. conda:recipe:: methyldackel
   :replaces_section_title:
   :noindex:

   A \(mostly\) universal methylation extractor for BS\-seq experiments. Formerly named PileOMeth.

   :homepage: https://github.com/dpryan79/MethylDackel
   :license: MIT
   :recipe: /`methyldackel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methyldackel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methyldackel/meta.yaml>`_

   


.. conda:package:: methyldackel

   |downloads_methyldackel| |docker_methyldackel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-6</code>,  <code>0.6.1-5</code>,  <code>0.6.1-4</code>,  <code>0.6.1-3</code>,  <code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.3-0</code>,  </span></summary>
      

      ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install methyldackel

   and update with::

      mamba update methyldackel

  To create a new environment, run::

      mamba create --name myenvname methyldackel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methyldackel:<tag>

   (see `methyldackel/tags`_ for valid values for ``<tag>``)


.. |downloads_methyldackel| image:: https://img.shields.io/conda/dn/bioconda/methyldackel.svg?style=flat
   :target: https://anaconda.org/bioconda/methyldackel
   :alt:   (downloads)
.. |docker_methyldackel| image:: https://quay.io/repository/biocontainers/methyldackel/status
   :target: https://quay.io/repository/biocontainers/methyldackel
.. _`methyldackel/tags`: https://quay.io/repository/biocontainers/methyldackel?tab=tags


.. raw:: html

    <script>
        var package = "methyldackel";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methyldackel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methyldackel/README.html