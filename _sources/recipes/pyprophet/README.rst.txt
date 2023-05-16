:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyprophet'
.. highlight: bash

pyprophet
=========

.. conda:recipe:: pyprophet
   :replaces_section_title:
   :noindex:

   Python reimplementation of mProphet peak scoring

   :homepage: https://github.com/PyProphet/pyprophet
   :license: BSD / BSD License
   :recipe: /`pyprophet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyprophet/meta.yaml>`_

   


.. conda:package:: pyprophet

   |downloads_pyprophet| |docker_pyprophet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.5-1</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.1.12-0</code>,  <code>2.1.11-0</code>,  <code>2.1.10-2</code>,  <code>2.1.10-1</code>,  <code>2.1.10-0</code>,  </span></summary>
      

      ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.1.12-0``,  ``2.1.11-0``,  ``2.1.10-2``,  ``2.1.10-1``,  ``2.1.10-0``,  ``2.1.6-0``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``0.24.1-1``,  ``0.24.1-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends dataclasses: 
   :depends hyperopt: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numexpr: ``>=2.1``
   :depends numpy: ``>=1.24.3,<2.0a0``
   :depends pandas: ``>=0.17``
   :depends pypdf2: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=0.17``
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: ``>=0.8.0``
   :depends tabulate: 
   :depends xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyprophet

   and update with::

      conda update pyprophet

   or use the docker container::

      docker pull quay.io/biocontainers/pyprophet:<tag>

   (see `pyprophet/tags`_ for valid values for ``<tag>``)


.. |downloads_pyprophet| image:: https://img.shields.io/conda/dn/bioconda/pyprophet.svg?style=flat
   :target: https://anaconda.org/bioconda/pyprophet
   :alt:   (downloads)
.. |docker_pyprophet| image:: https://quay.io/repository/biocontainers/pyprophet/status
   :target: https://quay.io/repository/biocontainers/pyprophet
.. _`pyprophet/tags`: https://quay.io/repository/biocontainers/pyprophet?tab=tags


.. raw:: html

    <script>
        var package = "pyprophet";
        var versions = ["2.2.5","2.2.5","2.2.4","2.2.3","2.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyprophet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyprophet/README.html