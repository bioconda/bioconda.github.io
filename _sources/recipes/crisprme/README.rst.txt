:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprme'
.. highlight: bash

crisprme
========

.. conda:recipe:: crisprme
   :replaces_section_title:
   :noindex:

   CRISPRme\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/samuelecancellieri/CRISPRme
   :license: GPL3
   :recipe: /`crisprme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme/meta.yaml>`_

   


.. conda:package:: crisprme

   |downloads_crisprme| |docker_crisprme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.8-0</code>,  <code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.8-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends crispritz: 
   :depends dash: ``1.10.0.*``
   :depends dash-bootstrap-components: ``0.10.0.*``
   :depends dash-core-components: ``1.9.0.*``
   :depends dash-daq: ``0.4.0.*``
   :depends dash-html-components: ``1.0.3.*``
   :depends dash-renderer: ``1.3.0.*``
   :depends dash-table: ``4.6.2.*``
   :depends flask: ``1.1.2.*``
   :depends flask-caching: ``1.7.1.*``
   :depends flask-compress: ``1.5.0.*``
   :depends fontconfig: ``2.13.1.*``
   :depends freetype: ``2.10.1.*``
   :depends future: ``0.18.2.*``
   :depends gettext: ``0.19.8.1.*``
   :depends gunicorn: ``20.0.4.*``
   :depends zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crisprme

   and update with::

      conda update crisprme

   or use the docker container::

      docker pull quay.io/biocontainers/crisprme:<tag>

   (see `crisprme/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprme| image:: https://img.shields.io/conda/dn/bioconda/crisprme.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprme
   :alt:   (downloads)
.. |docker_crisprme| image:: https://quay.io/repository/biocontainers/crisprme/status
   :target: https://quay.io/repository/biocontainers/crisprme
.. _`crisprme/tags`: https://quay.io/repository/biocontainers/crisprme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprme/README.html