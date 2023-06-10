:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reframed'
.. highlight: bash

reframed
========

.. conda:recipe:: reframed
   :replaces_section_title:
   :noindex:

   metabolic modeling package

   :homepage: https://github.com/cdanielmachado/reframed
   :license: Apache-2.0
   :recipe: /`reframed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed/meta.yaml>`_
   :links: biotools: :biotools:`reframed`, doi: :doi:`10.5281/zenodo.7955995`

   


.. conda:package:: reframed

   |downloads_reframed| |docker_reframed|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends python-libsbml: 
   :depends scipy: 
   :depends sympy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reframed

   and update with::

      conda update reframed

   or use the docker container::

      docker pull quay.io/biocontainers/reframed:<tag>

   (see `reframed/tags`_ for valid values for ``<tag>``)


.. |downloads_reframed| image:: https://img.shields.io/conda/dn/bioconda/reframed.svg?style=flat
   :target: https://anaconda.org/bioconda/reframed
   :alt:   (downloads)
.. |docker_reframed| image:: https://quay.io/repository/biocontainers/reframed/status
   :target: https://quay.io/repository/biocontainers/reframed
.. _`reframed/tags`: https://quay.io/repository/biocontainers/reframed?tab=tags


.. raw:: html

    <script>
        var package = "reframed";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reframed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reframed/README.html