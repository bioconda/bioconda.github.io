:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sinto'
.. highlight: bash

sinto
=====

.. conda:recipe:: sinto
   :replaces_section_title:
   :noindex:

   sinto\: tools for single\-cell data processing

   :homepage: https://timoast.github.io/sinto/
   :license: MIT / MIT
   :recipe: /`sinto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto/meta.yaml>`_

   


.. conda:package:: sinto

   |downloads_sinto| |docker_sinto|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3.1-0``

      

   
   :depends numpy: 
   :depends pysam: ``>=0.14``
   :depends python: 
   :depends scipy: 
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

      mamba install sinto

   and update with::

      mamba update sinto

  To create a new environment, run::

      mamba create --name myenvname sinto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sinto:<tag>

   (see `sinto/tags`_ for valid values for ``<tag>``)


.. |downloads_sinto| image:: https://img.shields.io/conda/dn/bioconda/sinto.svg?style=flat
   :target: https://anaconda.org/bioconda/sinto
   :alt:   (downloads)
.. |docker_sinto| image:: https://quay.io/repository/biocontainers/sinto/status
   :target: https://quay.io/repository/biocontainers/sinto
.. _`sinto/tags`: https://quay.io/repository/biocontainers/sinto?tab=tags


.. raw:: html

    <script>
        var package = "sinto";
        var versions = ["0.9.0","0.8.4","0.8.3","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sinto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sinto/README.html