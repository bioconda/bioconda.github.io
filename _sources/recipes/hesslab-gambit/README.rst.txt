:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hesslab-gambit'
.. highlight: bash

hesslab-gambit
==============

.. conda:recipe:: hesslab-gambit
   :replaces_section_title:
   :noindex:

   Tool for rapid taxonomic identification of microbial pathogens

   :homepage: https://github.com/hesslab-gambit/gambit
   :license: AGPL-3.0-or-later
   :recipe: /`hesslab-gambit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hesslab-gambit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hesslab-gambit/meta.yaml>`_

   


.. conda:package:: hesslab-gambit

   |downloads_hesslab-gambit| |docker_hesslab-gambit|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends alembic: ``>=1.0``
   :depends attrs: ``>=20``
   :depends biopython: ``>=1.69``
   :depends cattrs: ``>=1.0``
   :depends click: ``>=7.0``
   :depends h5py: ``>=3.0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: ``>=1.13``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends setuptools: 
   :depends sqlalchemy: ``>=1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hesslab-gambit

   and update with::

      conda update hesslab-gambit

   or use the docker container::

      docker pull quay.io/biocontainers/hesslab-gambit:<tag>

   (see `hesslab-gambit/tags`_ for valid values for ``<tag>``)


.. |downloads_hesslab-gambit| image:: https://img.shields.io/conda/dn/bioconda/hesslab-gambit.svg?style=flat
   :target: https://anaconda.org/bioconda/hesslab-gambit
   :alt:   (downloads)
.. |docker_hesslab-gambit| image:: https://quay.io/repository/biocontainers/hesslab-gambit/status
   :target: https://quay.io/repository/biocontainers/hesslab-gambit
.. _`hesslab-gambit/tags`: https://quay.io/repository/biocontainers/hesslab-gambit?tab=tags


.. raw:: html

    <script>
        var package = "hesslab-gambit";
        var versions = ["0.4.0","0.4.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hesslab-gambit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hesslab-gambit/README.html