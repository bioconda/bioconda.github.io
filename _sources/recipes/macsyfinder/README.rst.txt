:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macsyfinder'
.. highlight: bash

macsyfinder
===========

.. conda:recipe:: macsyfinder
   :replaces_section_title:
   :noindex:

   MacSyFinder\: Detection of macromolecular systems in protein datasets using systems modelling and similarity search

   :homepage: https://github.com/gem-pasteur/macsyfinder
   :documentation: https://macsyfinder.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`macsyfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder/meta.yaml>`_
   :links: biotools: :biotools:`macsyfinder`, doi: :doi:`10.24072/pcjournal.250`

   


.. conda:package:: macsyfinder

   |downloads_macsyfinder| |docker_macsyfinder|

   :versions:
      
      

      ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``

      

   
   :depends certifi: 
   :depends colorama: ``>=0.4.4``
   :depends colorlog: 
   :depends git: ``>1.7.0``
   :depends gitpython: ``>=3.1.30``
   :depends hmmer: ``>=3.1b2,<=3.4``
   :depends networkx: ``>=2.4``
   :depends packaging: ``>=18.0``
   :depends pandas: ``>=1.1.5,<=2.2.3``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=5.1.1``
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

      mamba install macsyfinder

   and update with::

      mamba update macsyfinder

  To create a new environment, run::

      mamba create --name myenvname macsyfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macsyfinder:<tag>

   (see `macsyfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_macsyfinder| image:: https://img.shields.io/conda/dn/bioconda/macsyfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/macsyfinder
   :alt:   (downloads)
.. |docker_macsyfinder| image:: https://quay.io/repository/biocontainers/macsyfinder/status
   :target: https://quay.io/repository/biocontainers/macsyfinder
.. _`macsyfinder/tags`: https://quay.io/repository/biocontainers/macsyfinder?tab=tags


.. raw:: html

    <script>
        var package = "macsyfinder";
        var versions = ["2.1.4","2.1.4","2.1.3","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macsyfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macsyfinder/README.html