:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nrpys'
.. highlight: bash

nrpys
=====

.. conda:recipe:: nrpys
   :replaces_section_title:
   :noindex:

   Python language bindings for nrps\-rs substrate specificity predictor.

   :homepage: https://github.com/kblin/nrpys
   :license: GPL3
   :recipe: /`nrpys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys/meta.yaml>`_

   


.. conda:package:: nrpys

   |downloads_nrpys| |docker_nrpys|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nrpys

   and update with::

      conda update nrpys

   or use the docker container::

      docker pull quay.io/biocontainers/nrpys:<tag>

   (see `nrpys/tags`_ for valid values for ``<tag>``)


.. |downloads_nrpys| image:: https://img.shields.io/conda/dn/bioconda/nrpys.svg?style=flat
   :target: https://anaconda.org/bioconda/nrpys
   :alt:   (downloads)
.. |docker_nrpys| image:: https://quay.io/repository/biocontainers/nrpys/status
   :target: https://quay.io/repository/biocontainers/nrpys
.. _`nrpys/tags`: https://quay.io/repository/biocontainers/nrpys?tab=tags


.. raw:: html

    <script>
        var package = "nrpys";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nrpys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nrpys/README.html