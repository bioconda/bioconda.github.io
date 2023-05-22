:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cami-amber'
.. highlight: bash

cami-amber
==========

.. conda:recipe:: cami-amber
   :replaces_section_title:
   :noindex:

   AMBER\: Assessment of Metagenome BinnERs

   :homepage: https://github.com/CAMI-challenge/AMBER
   :license: GPL v3
   :recipe: /`cami-amber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-amber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-amber/meta.yaml>`_

   


.. conda:package:: cami-amber

   |downloads_cami-amber| |docker_cami-amber|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0.post0-0``

      

   
   :depends biopython: ``>=1.81``
   :depends bokeh: ``>=3.1.0``
   :depends jinja2: ``>=3.1.2``
   :depends matplotlib-base: ``>=3.7.1``
   :depends numpy: ``>=1.24.2``
   :depends pandas: ``>=1.5.3``
   :depends pyarrow: ``>=11.0.0``
   :depends python: ``>=3.6``
   :depends seaborn: ``>=0.12.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cami-amber

   and update with::

      conda update cami-amber

   or use the docker container::

      docker pull quay.io/biocontainers/cami-amber:<tag>

   (see `cami-amber/tags`_ for valid values for ``<tag>``)


.. |downloads_cami-amber| image:: https://img.shields.io/conda/dn/bioconda/cami-amber.svg?style=flat
   :target: https://anaconda.org/bioconda/cami-amber
   :alt:   (downloads)
.. |docker_cami-amber| image:: https://quay.io/repository/biocontainers/cami-amber/status
   :target: https://quay.io/repository/biocontainers/cami-amber
.. _`cami-amber/tags`: https://quay.io/repository/biocontainers/cami-amber?tab=tags


.. raw:: html

    <script>
        var package = "cami-amber";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.1","2.0.0.post0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cami-amber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cami-amber/README.html