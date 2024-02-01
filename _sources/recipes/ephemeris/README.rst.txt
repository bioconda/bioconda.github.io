:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ephemeris'
.. highlight: bash

ephemeris
=========

.. conda:recipe:: ephemeris
   :replaces_section_title:
   :noindex:

   Ephemeris is an opinionated library and set of scripts for managing the bootstrapping of Galaxy project plugins \- tools\, index data\, and workflows.

   :homepage: https://github.com/galaxyproject/ephemeris
   :documentation: https://ephemeris.readthedocs.io/en/latest/
   
   :license: OTHER / Academic Free License (AFL)
   :recipe: /`ephemeris <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ephemeris>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ephemeris/meta.yaml>`_

   


.. conda:package:: ephemeris

   |downloads_ephemeris| |docker_ephemeris|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.9-0</code>,  <code>0.10.8-0</code>,  <code>0.10.7-0</code>,  <code>0.10.6-2</code>,  <code>0.10.6-1</code>,  <code>0.10.6-0</code>,  <code>0.10.5-0</code>,  <code>0.10.4-0</code>,  <code>0.10.2-0</code>,  </span></summary>
      

      ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.7-0``,  ``0.10.6-2``,  ``0.10.6-1``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-2``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioblend: ``>=0.10.0``
   :depends galaxy-tool-util: ``>=20.9.1``
   :depends galaxy-util: ``>=20.9.0``
   :depends jinja2: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends rich: 
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ephemeris

   and update with::

      mamba update ephemeris

  To create a new environment, run::

      mamba create --name myenvname ephemeris

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ephemeris:<tag>

   (see `ephemeris/tags`_ for valid values for ``<tag>``)


.. |downloads_ephemeris| image:: https://img.shields.io/conda/dn/bioconda/ephemeris.svg?style=flat
   :target: https://anaconda.org/bioconda/ephemeris
   :alt:   (downloads)
.. |docker_ephemeris| image:: https://quay.io/repository/biocontainers/ephemeris/status
   :target: https://quay.io/repository/biocontainers/ephemeris
.. _`ephemeris/tags`: https://quay.io/repository/biocontainers/ephemeris?tab=tags


.. raw:: html

    <script>
        var package = "ephemeris";
        var versions = ["0.10.9","0.10.8","0.10.7","0.10.6","0.10.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ephemeris/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ephemeris/README.html