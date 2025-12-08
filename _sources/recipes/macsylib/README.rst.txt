:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macsylib'
.. highlight: bash

macsylib
========

.. conda:recipe:: macsylib
   :replaces_section_title:
   :noindex:

   MacSyLib\: Python library that help to detect of macromolecular\, systems genetic pathways… in prokaryotes protein datasets using systems modelling and similarity search.

   :homepage: https://github.com/gem-pasteur/macsylib
   :documentation: https://macsylib.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`macsylib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsylib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsylib/meta.yaml>`_
   :links: doi: :doi:`10.24072/pcjournal.250`, biotools: :biotools:`macsylib`

   


.. conda:package:: macsylib

   |downloads_macsylib| |docker_macsylib|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends certifi: 
   :depends colorama: ``>=0.4.4``
   :depends colorlog: ``>=4.0.2``
   :depends git: ``>1.7.0``
   :depends gitpython: ``>=3.1.30``
   :depends hmmer: ``>=3.1b2,<=3.4``
   :depends networkx: ``>=2.4``
   :depends packaging: ``>=18.0``
   :depends pandas: ``>=1.03``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=5.1.1``
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

      mamba install macsylib

   and update with::

      mamba update macsylib

  To create a new environment, run::

      mamba create --name myenvname macsylib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macsylib:<tag>

   (see `macsylib/tags`_ for valid values for ``<tag>``)


.. |downloads_macsylib| image:: https://img.shields.io/conda/dn/bioconda/macsylib.svg?style=flat
   :target: https://anaconda.org/bioconda/macsylib
   :alt:   (downloads)
.. |docker_macsylib| image:: https://quay.io/repository/biocontainers/macsylib/status
   :target: https://quay.io/repository/biocontainers/macsylib
.. _`macsylib/tags`: https://quay.io/repository/biocontainers/macsylib?tab=tags


.. raw:: html

    <script>
        var package = "macsylib";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macsylib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macsylib/README.html