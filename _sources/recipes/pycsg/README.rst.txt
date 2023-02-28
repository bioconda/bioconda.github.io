:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycsg'
.. highlight: bash

pycsg
=====

.. conda:recipe:: pycsg
   :replaces_section_title:
   :noindex:

   Python port of csg.js from Evan Wallace

   :homepage: https://github.com/pletzer/pycsg
   :license: MIT
   :recipe: /`pycsg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycsg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycsg/meta.yaml>`_

   


.. conda:package:: pycsg

   |downloads_pycsg| |docker_pycsg|

   :versions:
      
      

      ``0.3.12-1``,  ``0.3.12-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pycsg

   and update with::

      conda update pycsg

   or use the docker container::

      docker pull quay.io/biocontainers/pycsg:<tag>

   (see `pycsg/tags`_ for valid values for ``<tag>``)


.. |downloads_pycsg| image:: https://img.shields.io/conda/dn/bioconda/pycsg.svg?style=flat
   :target: https://anaconda.org/bioconda/pycsg
   :alt:   (downloads)
.. |docker_pycsg| image:: https://quay.io/repository/biocontainers/pycsg/status
   :target: https://quay.io/repository/biocontainers/pycsg
.. _`pycsg/tags`: https://quay.io/repository/biocontainers/pycsg?tab=tags


.. raw:: html

    <script>
        var package = "pycsg";
        var versions = ["0.3.12","0.3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycsg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycsg/README.html