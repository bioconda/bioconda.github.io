:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfipy'
.. highlight: bash

orfipy
======

.. conda:recipe:: orfipy
   :replaces_section_title:
   :noindex:

   orfipy\: fast and flexible search for open reading frames in fasta sequences

   :homepage: https://github.com/urmi-21/orfipy
   :license: MIT / MIT
   :recipe: /`orfipy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfipy/meta.yaml>`_

   


.. conda:package:: orfipy

   |downloads_orfipy| |docker_orfipy|

   :versions:
      
      

      ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends colorama: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends psutil: 
   :depends pyahocorasick: 
   :depends pyfastx: ``>=2.1.0,<3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install orfipy

   and update with::

      mamba update orfipy

  To create a new environment, run::

      mamba create --name myenvname orfipy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orfipy:<tag>

   (see `orfipy/tags`_ for valid values for ``<tag>``)


.. |downloads_orfipy| image:: https://img.shields.io/conda/dn/bioconda/orfipy.svg?style=flat
   :target: https://anaconda.org/bioconda/orfipy
   :alt:   (downloads)
.. |docker_orfipy| image:: https://quay.io/repository/biocontainers/orfipy/status
   :target: https://quay.io/repository/biocontainers/orfipy
.. _`orfipy/tags`: https://quay.io/repository/biocontainers/orfipy?tab=tags


.. raw:: html

    <script>
        var package = "orfipy";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfipy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfipy/README.html