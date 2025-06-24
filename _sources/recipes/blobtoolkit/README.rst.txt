:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blobtoolkit'
.. highlight: bash

blobtoolkit
===========

.. conda:recipe:: blobtoolkit
   :replaces_section_title:
   :noindex:

   Interactive quality assessment of genome assemblies.

   :homepage: https://github.com/blobtoolkit/blobtoolkit
   :documentation: https://blobtoolkit.genomehubs.org
   
   :license: MIT / MIT
   :recipe: /`blobtoolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtoolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtoolkit/meta.yaml>`_
   :links: doi: :doi:`10.1534/g3.119.400908`, biotools: :biotools:`BlobToolKit`, usegalaxy-eu: :usegalaxy-eu:`blobtoolkit`, usegalaxy-eu: :usegalaxy-eu:`interactive_tool_blobtoolkit`

   


.. conda:package:: blobtoolkit

   |downloads_blobtoolkit| |docker_blobtoolkit|

   :versions:
      
      

      ``4.4.6-0``

      

   
   :depends blobtk: ``>=0.7.1``
   :depends chromedriver-autoinstaller: ``>=0.6.2``
   :depends docopt: ``>=0.6.2``
   :depends firefox: 
   :depends geckodriver: 
   :depends psutil: ``5.9.4``
   :depends python: ``>=3.9,<3.14``
   :depends python-fastjsonschema: ``2.21.1``
   :depends pyvirtualdisplay: ``3.0``
   :depends pyyaml: 
   :depends selenium: ``>=4.10.0``
   :depends tolkein: ``>=0.5.0``
   :depends tqdm: ``4.64.1``
   :depends ujson: ``>=5.7.0``
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

      mamba install blobtoolkit

   and update with::

      mamba update blobtoolkit

  To create a new environment, run::

      mamba create --name myenvname blobtoolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blobtoolkit:<tag>

   (see `blobtoolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_blobtoolkit| image:: https://img.shields.io/conda/dn/bioconda/blobtoolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/blobtoolkit
   :alt:   (downloads)
.. |docker_blobtoolkit| image:: https://quay.io/repository/biocontainers/blobtoolkit/status
   :target: https://quay.io/repository/biocontainers/blobtoolkit
.. _`blobtoolkit/tags`: https://quay.io/repository/biocontainers/blobtoolkit?tab=tags


.. raw:: html

    <script>
        var package = "blobtoolkit";
        var versions = ["4.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blobtoolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blobtoolkit/README.html