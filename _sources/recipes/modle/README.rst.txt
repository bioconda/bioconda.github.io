:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modle'
.. highlight: bash

modle
=====

.. conda:recipe:: modle
   :replaces_section_title:
   :noindex:

   High\-performance stochastic modeling of DNA loop extrusion interactions

   :homepage: https://github.com/paulsengroup/MoDLE
   :documentation: https://github.com/paulsengroup/MoDLE#readme
   
   :license: MIT
   :recipe: /`modle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modle/meta.yaml>`_
   :links: biotools: :biotools:`modle`, biotools: :biotools:`modle_tools`, doi: :doi:`10.1186/s13059-022-02815-7`, doi: :doi:`10.5281/zenodo.6992533`

   


.. conda:package:: modle

   |downloads_modle| |docker_modle|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install modle

   and update with::

      conda update modle

   or use the docker container::

      docker pull quay.io/biocontainers/modle:<tag>

   (see `modle/tags`_ for valid values for ``<tag>``)


.. |downloads_modle| image:: https://img.shields.io/conda/dn/bioconda/modle.svg?style=flat
   :target: https://anaconda.org/bioconda/modle
   :alt:   (downloads)
.. |docker_modle| image:: https://quay.io/repository/biocontainers/modle/status
   :target: https://quay.io/repository/biocontainers/modle
.. _`modle/tags`: https://quay.io/repository/biocontainers/modle?tab=tags


.. raw:: html

    <script>
        var package = "modle";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modle/README.html