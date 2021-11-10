:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cameo'
.. highlight: bash

cameo
=====

.. conda:recipe:: cameo
   :replaces_section_title:
   :noindex:

   cameo \- computer aided metabolic engineering \& optimization

   :homepage: http://cameo.bio
   :license: APACHE / Apache Software
   :recipe: /`cameo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cameo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cameo/meta.yaml>`_

   


.. conda:package:: cameo

   |downloads_cameo| |docker_cameo|

   :versions:
      
      

      ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.15-0``

      

   
   :depends blessings: ``>=1.5.1``
   :depends click: ``>=6.7``
   :depends cobra: ``>=0.11.1``
   :depends escher: ``>=1.1.2``
   :depends future: ``>=0.15.2``
   :depends gnomic: ``>=1.0.1``
   :depends inspyred: ``>=1.0``
   :depends iprogress: ``>=0.4``
   :depends lazy-object-proxy: ``>=1.2.0``
   :depends networkx: ``>=1.9.1``
   :depends numexpr: ``>=2.4``
   :depends numpy: ``>=1.9.1``
   :depends openpyxl: ``>=2.4.5``
   :depends optlang: ``>=1.2.1``
   :depends ordered-set: ``>=1.2``
   :depends palettable: ``>=2.1.1``
   :depends pandas: ``>=0.24.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.10.0``
   :depends scipy: ``>=0.14.0``
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cameo

   and update with::

      conda update cameo

   or use the docker container::

      docker pull quay.io/biocontainers/cameo:<tag>

   (see `cameo/tags`_ for valid values for ``<tag>``)


.. |downloads_cameo| image:: https://img.shields.io/conda/dn/bioconda/cameo.svg?style=flat
   :target: https://anaconda.org/bioconda/cameo
   :alt:   (downloads)
.. |docker_cameo| image:: https://quay.io/repository/biocontainers/cameo/status
   :target: https://quay.io/repository/biocontainers/cameo
.. _`cameo/tags`: https://quay.io/repository/biocontainers/cameo?tab=tags


.. raw:: html

    <script>
        var package = "cameo";
        var versions = ["0.13.6","0.13.5","0.13.0","0.12.0","0.11.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cameo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cameo/README.html