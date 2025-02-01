:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nafcodec'
.. highlight: bash

nafcodec
========

.. conda:recipe:: nafcodec
   :replaces_section_title:
   :noindex:

   PyO3 bindings and Python interface to nafcodec\, an encoder\/decoder for Nucleotide Archive Format \(NAF\) files.


   :homepage: https://github.com/althonos/nafcodec
   :documentation: https://nafcodec.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`nafcodec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nafcodec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nafcodec/meta.yaml>`_

   


.. conda:package:: nafcodec

   |downloads_nafcodec| |docker_nafcodec|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-0``

      

   
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nafcodec

   and update with::

      mamba update nafcodec

  To create a new environment, run::

      mamba create --name myenvname nafcodec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nafcodec:<tag>

   (see `nafcodec/tags`_ for valid values for ``<tag>``)


.. |downloads_nafcodec| image:: https://img.shields.io/conda/dn/bioconda/nafcodec.svg?style=flat
   :target: https://anaconda.org/bioconda/nafcodec
   :alt:   (downloads)
.. |docker_nafcodec| image:: https://quay.io/repository/biocontainers/nafcodec/status
   :target: https://quay.io/repository/biocontainers/nafcodec
.. _`nafcodec/tags`: https://quay.io/repository/biocontainers/nafcodec?tab=tags


.. raw:: html

    <script>
        var package = "nafcodec";
        var versions = ["0.3.1","0.3.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nafcodec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nafcodec/README.html