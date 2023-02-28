:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecco'
.. highlight: bash

gecco
=====

.. conda:recipe:: gecco
   :replaces_section_title:
   :noindex:

   Biosynthetic Gene Cluster prediction with Conditional Random Fields.

   :homepage: https://gecco.embl.de/
   :license: GPL / GPL-3
   :recipe: /`gecco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.05.03.442509`

   


.. conda:package:: gecco

   |downloads_gecco| |docker_gecco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.6-0</code>,  <code>0.9.5-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.8.10-0</code>,  <code>0.8.9-0</code>,  <code>0.8.8-0</code>,  <code>0.8.7-0</code>,  <code>0.8.6-0</code>,  </span></summary>
      

      ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends docopt: ``>=0.6.2``
   :depends importlib_metadata: ``>=4.0``
   :depends numpy: ``>=1.16``
   :depends psutil: ``>=5.8``
   :depends pyhmmer: ``>=0.7.0``
   :depends pyrodigal: ``>=2.0.0``
   :depends python: ``>=3.6``
   :depends rich: ``>=12.4.0``
   :depends scikit-learn: ``>=1.0``
   :depends scipy: ``>=1.4``
   :depends sklearn-crfsuite: ``>=0.3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gecco

   and update with::

      conda update gecco

   or use the docker container::

      docker pull quay.io/biocontainers/gecco:<tag>

   (see `gecco/tags`_ for valid values for ``<tag>``)


.. |downloads_gecco| image:: https://img.shields.io/conda/dn/bioconda/gecco.svg?style=flat
   :target: https://anaconda.org/bioconda/gecco
   :alt:   (downloads)
.. |docker_gecco| image:: https://quay.io/repository/biocontainers/gecco/status
   :target: https://quay.io/repository/biocontainers/gecco
.. _`gecco/tags`: https://quay.io/repository/biocontainers/gecco?tab=tags


.. raw:: html

    <script>
        var package = "gecco";
        var versions = ["0.9.6","0.9.5","0.9.2","0.9.1","0.8.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecco/README.html