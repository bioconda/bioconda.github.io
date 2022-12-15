:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gc-meox-tms'
.. highlight: bash

gc-meox-tms
===========

.. conda:recipe:: gc-meox-tms
   :replaces_section_title:
   :noindex:

   In\-silico MeOX\/TMS derivatization of chemical compounds.

   :homepage: https://github.com/RECETOX/gc-meox-tms
   :license: MIT
   :recipe: /`gc-meox-tms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gc-meox-tms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gc-meox-tms/meta.yaml>`_

   This package performs in\-silico methoximation \(MeOX\) and trimethylsilylation \(TMS\) of chemical compounds from SMILES strings or RDKit molecule objects. It also can identify whether a given compound is already derivatized by MeOX or TMS method.


.. conda:package:: gc-meox-tms

   |downloads_gc-meox-tms| |docker_gc-meox-tms|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.8``
   :depends rdkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gc-meox-tms

   and update with::

      conda update gc-meox-tms

   or use the docker container::

      docker pull quay.io/biocontainers/gc-meox-tms:<tag>

   (see `gc-meox-tms/tags`_ for valid values for ``<tag>``)


.. |downloads_gc-meox-tms| image:: https://img.shields.io/conda/dn/bioconda/gc-meox-tms.svg?style=flat
   :target: https://anaconda.org/bioconda/gc-meox-tms
   :alt:   (downloads)
.. |docker_gc-meox-tms| image:: https://quay.io/repository/biocontainers/gc-meox-tms/status
   :target: https://quay.io/repository/biocontainers/gc-meox-tms
.. _`gc-meox-tms/tags`: https://quay.io/repository/biocontainers/gc-meox-tms?tab=tags


.. raw:: html

    <script>
        var package = "gc-meox-tms";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gc-meox-tms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gc-meox-tms/README.html