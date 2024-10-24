:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinvar-this'
.. highlight: bash

clinvar-this
============

.. conda:recipe:: clinvar-this
   :replaces_section_title:
   :noindex:

   ClinVar Submission API Made Easy.

   :homepage: https://github.com/bihealth/clinvar-this
   :license: MIT / MIT
   :recipe: /`clinvar-this <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-this/meta.yaml>`_

   


.. conda:package:: clinvar-this

   |downloads_clinvar-this| |docker_clinvar-this|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.3-0</code>,  <code>0.18.2-0</code>,  <code>0.18.0-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.5-0</code>,  <code>0.15.4-0</code>,  <code>0.14.6-0</code>,  </span></summary>
      

      ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.0-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.5-0``,  ``0.15.4-0``,  ``0.14.6-0``,  ``0.14.5-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.4.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends httpx: ``>=0.24``
   :depends jsonschema: 
   :depends logzero: 
   :depends protobuf: ``>=3.20.2,<6.0``
   :depends pydantic: ``>=2.5``
   :depends pysam: ``>=0.10.0``
   :depends python: ``>=3.6``
   :depends python-dateutil: 
   :depends tabulate: 
   :depends toml: 
   :depends tqdm: ``>=4.0``
   :depends xmltodict: ``>=0.13.0,<0.15``
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

      mamba install clinvar-this

   and update with::

      mamba update clinvar-this

  To create a new environment, run::

      mamba create --name myenvname clinvar-this

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clinvar-this:<tag>

   (see `clinvar-this/tags`_ for valid values for ``<tag>``)


.. |downloads_clinvar-this| image:: https://img.shields.io/conda/dn/bioconda/clinvar-this.svg?style=flat
   :target: https://anaconda.org/bioconda/clinvar-this
   :alt:   (downloads)
.. |docker_clinvar-this| image:: https://quay.io/repository/biocontainers/clinvar-this/status
   :target: https://quay.io/repository/biocontainers/clinvar-this
.. _`clinvar-this/tags`: https://quay.io/repository/biocontainers/clinvar-this?tab=tags


.. raw:: html

    <script>
        var package = "clinvar-this";
        var versions = ["0.18.3","0.18.2","0.18.0","0.17.1","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinvar-this/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinvar-this/README.html