:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprme'
.. highlight: bash

crisprme
========

.. conda:recipe:: crisprme
   :replaces_section_title:
   :noindex:

   CRISPRme\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/pinellolab/CRISPRme
   :documentation: https://github.com/pinellolab/CRISPRme/blob/v2.1.6/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`crisprme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41588-022-01257-y`

   


.. conda:package:: crisprme

   |downloads_crisprme| |docker_crisprme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  </span></summary>
      

      ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.9.9-1``,  ``1.9.9-0``,  ``1.9.8-0``,  ``1.9.7-0``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-2``,  ``1.9.4-1``,  ``1.9.4-0``,  ``1.9.3-1``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.7-0``,  ``1.7.2-0``,  ``1.7.0-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.8-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends axel: 
   :depends crispritz: 
   :depends dash: ``1.10.0.*``
   :depends dash-bootstrap-components: ``0.10.0.*``
   :depends dash-core-components: ``1.9.0.*``
   :depends dash-daq: ``0.4.0.*``
   :depends dash-html-components: ``1.0.3.*``
   :depends dash-renderer: ``1.3.0.*``
   :depends dash-table: ``4.6.2.*``
   :depends flask: ``1.1.3.*``
   :depends flask-caching: ``1.7.1.*``
   :depends flask-compress: ``1.5.0.*``
   :depends fontconfig: ``2.13.1.*``
   :depends freetype: ``2.10.1.*``
   :depends future: ``0.18.2.*``
   :depends gdown: 
   :depends gettext: ``0.19.8.1.*``
   :depends gunicorn: ``20.0.4.*``
   :depends itsdangerous: ``>=0.24,<2.0``
   :depends numpy: ``1.20.0.*``
   :depends pandas: ``1.2.5.*``
   :depends werkzeug: ``1.0.1.*``
   :depends zip: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install crisprme

   and update with::

      mamba update crisprme

  To create a new environment, run::

      mamba create --name myenvname crisprme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crisprme:<tag>

   (see `crisprme/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprme| image:: https://img.shields.io/conda/dn/bioconda/crisprme.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprme
   :alt:   (downloads)
.. |docker_crisprme| image:: https://quay.io/repository/biocontainers/crisprme/status
   :target: https://quay.io/repository/biocontainers/crisprme
.. _`crisprme/tags`: https://quay.io/repository/biocontainers/crisprme?tab=tags


.. raw:: html

    <script>
        var package = "crisprme";
        var versions = ["2.1.6","2.1.5","2.1.4","2.1.3","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprme/README.html