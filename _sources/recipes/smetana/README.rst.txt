:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smetana'
.. highlight: bash

smetana
=======

.. conda:recipe:: smetana
   :replaces_section_title:
   :noindex:

   Species METabolic interaction ANAlysis \(SMETANA\) is a python\-based command line tool to analyse microbial communities.

   :homepage: https://github.com/cdanielmachado/smetana
   :license: Apache-2.0
   :recipe: /`smetana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smetana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smetana/meta.yaml>`_

   


.. conda:package:: smetana

   |downloads_smetana| |docker_smetana|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends reframed: 
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

      mamba install smetana

   and update with::

      mamba update smetana

  To create a new environment, run::

      mamba create --name myenvname smetana

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smetana:<tag>

   (see `smetana/tags`_ for valid values for ``<tag>``)


.. |downloads_smetana| image:: https://img.shields.io/conda/dn/bioconda/smetana.svg?style=flat
   :target: https://anaconda.org/bioconda/smetana
   :alt:   (downloads)
.. |docker_smetana| image:: https://quay.io/repository/biocontainers/smetana/status
   :target: https://quay.io/repository/biocontainers/smetana
.. _`smetana/tags`: https://quay.io/repository/biocontainers/smetana?tab=tags


.. raw:: html

    <script>
        var package = "smetana";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smetana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smetana/README.html