:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake'
.. highlight: bash

snakemake
=========

.. conda:recipe:: snakemake
   :replaces_section_title:
   :noindex:

   A popular workflow management system aiming at full in\-silico reproducibility.

   :homepage: https://snakemake.github.io
   :license: MIT
   :recipe: /`snakemake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

   Snakemake is a workflow management system that aims to reduce the complexity of creating 
   workflows by providing a fast and comfortable execution environment\, together with a clean 
   and modern specification language in python style. Snakemake workflows are essentially Python 
   scripts extended by declarative code to define rules. Rules describe how to create output 
   files from input files.



.. conda:package:: snakemake

   |downloads_snakemake| |docker_snakemake|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.10.0-0</code>,  <code>6.9.1-0</code>,  <code>6.9.0-0</code>,  <code>6.8.2-0</code>,  <code>6.8.1-0</code>,  <code>6.8.0-0</code>,  <code>6.7.0-0</code>,  <code>6.6.1-0</code>,  <code>6.6.0-0</code>,  </span></summary>
      

      ``6.10.0-0``,  ``6.9.1-0``,  ``6.9.0-0``,  ``6.8.2-0``,  ``6.8.1-0``,  ``6.8.0-0``,  ``6.7.0-0``,  ``6.6.1-0``,  ``6.6.0-0``,  ``6.5.3-0``,  ``6.5.2-0``,  ``6.5.1-0``,  ``6.5.0-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.2-1``,  ``6.1.2-0``,  ``6.1.1-0``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.5-1``,  ``6.0.5-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.32.2-0``,  ``5.32.1-0``,  ``5.32.0-0``,  ``5.31.1-1``,  ``5.31.1-0``,  ``5.31.0-0``,  ``5.30.2-0``,  ``5.30.1-0``,  ``5.29.0-0``,  ``5.28.0-0``,  ``5.27.4-0``,  ``5.26.1-1``,  ``5.26.1-0``,  ``5.26.0-0``,  ``5.25.0-1``,  ``5.25.0-0``,  ``5.24.2-0``,  ``5.24.1-0``,  ``5.24.0-1``,  ``5.24.0-0``,  ``5.23.0-2``,  ``5.23.0-1``,  ``5.23.0-0``,  ``5.22.1-0``,  ``5.22.0-0``,  ``5.21.0-0``,  ``5.20.1-1``,  ``5.20.1-0``,  ``5.20.0-0``,  ``5.19.3-0``,  ``5.19.2-0``,  ``5.19.1-0``,  ``5.19.0-0``,  ``5.18.1-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.14.0-1``,  ``5.14.0-0``,  ``5.13.0-0``,  ``5.12.3-0``,  ``5.12.2-0``,  ``5.12.1-0``,  ``5.11.2-0``,  ``5.11.1-0``,  ``5.11.0-0``,  ``5.10.0-0``,  ``5.9.1-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.7.4-0``,  ``5.7.1-0``,  ``5.7.0-0``,  ``5.6.0-0``,  ``5.5.4-2``,  ``5.5.4-1``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-0``,  ``5.5.1-0``,  ``5.5.0-0``,  ``5.4.5-0``,  ``5.4.4-0``,  ``5.4.3-0``,  ``5.4.2-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.1-0``,  ``5.3.0-2``,  ``5.3.0-1``,  ``5.2.4-1``,  ``5.2.2-1``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.5-0``,  ``5.1.4-2``,  ``5.1.4-0``,  ``5.1.3-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.0.0-0``,  ``4.8.1-0``,  ``4.8.0-0``,  ``4.7.0-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``,  ``4.4.0-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.13.3-0``,  ``3.13.2-0``,  ``3.13.0-1``,  ``3.12.0-1``,  ``3.11.2-1``,  ``3.11.2-0``,  ``3.11.1-1``,  ``3.11.1-0``,  ``3.11.0-1``,  ``3.10.2-1``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.10.0-0``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.5-1``,  ``3.5.4-1``,  ``3.5.3-1``,  ``3.5.2-1``,  ``3.5.1-1``,  ``3.4.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends aioeasywebdav: 
   :depends boto3: 
   :depends dropbox: ``>=7.2.1``
   :depends filechunkio: ``>=1.6``
   :depends ftputil: ``>=3.2``
   :depends google-api-python-client: 
   :depends google-cloud-storage: 
   :depends google-crc32c: 
   :depends imagemagick: ``>=7.0``
   :depends jinja2: 
   :depends jsonschema: 
   :depends networkx: ``>=2.0``
   :depends oauth2client: 
   :depends pandas: 
   :depends peppy: 
   :depends psutil: 
   :depends pygments: 
   :depends pygraphviz: ``>=1.5``
   :depends pysftp: ``>=0.2.8``
   :depends python-irodsclient: 
   :depends slacker: 
   :depends snakemake-minimal: ``6.10.0.*``
   :depends xorg-libxau: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake

   and update with::

      conda update snakemake

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake:<tag>

   (see `snakemake/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake| image:: https://img.shields.io/conda/dn/bioconda/snakemake.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake
   :alt:   (downloads)
.. |docker_snakemake| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake/tags`: https://quay.io/repository/biocontainers/snakemake?tab=tags


.. raw:: html

    <script>
        var package = "snakemake";
        var versions = ["6.10.0","6.9.1","6.9.0","6.8.2","6.8.1"];
    </script>


.. conda:package:: snakemake-minimal

   |downloads_snakemake-minimal| |docker_snakemake-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.10.0-0</code>,  <code>6.9.1-0</code>,  <code>6.9.0-0</code>,  <code>6.8.2-0</code>,  <code>6.8.1-0</code>,  <code>6.8.0-0</code>,  <code>6.7.0-0</code>,  <code>6.6.1-0</code>,  <code>6.6.0-0</code>,  </span></summary>
      

      ``6.10.0-0``,  ``6.9.1-0``,  ``6.9.0-0``,  ``6.8.2-0``,  ``6.8.1-0``,  ``6.8.0-0``,  ``6.7.0-0``,  ``6.6.1-0``,  ``6.6.0-0``,  ``6.5.3-0``,  ``6.5.2-0``,  ``6.5.1-0``,  ``6.5.0-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.2-1``,  ``6.1.2-0``,  ``6.1.1-0``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.5-1``,  ``6.0.5-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.32.2-0``,  ``5.32.1-0``,  ``5.32.0-0``,  ``5.31.1-1``,  ``5.31.1-0``,  ``5.31.0-0``,  ``5.30.2-0``,  ``5.30.1-0``,  ``5.29.0-0``,  ``5.28.0-0``,  ``5.27.4-0``,  ``5.26.1-1``,  ``5.26.1-0``,  ``5.26.0-0``,  ``5.25.0-1``,  ``5.25.0-0``,  ``5.24.2-0``,  ``5.24.1-0``,  ``5.24.0-1``,  ``5.24.0-0``,  ``5.23.0-2``,  ``5.22.1-0``,  ``5.22.0-0``,  ``5.21.0-0``,  ``5.20.1-1``,  ``5.20.1-0``,  ``5.20.0-0``,  ``5.19.3-0``,  ``5.19.2-0``,  ``5.19.1-0``,  ``5.19.0-0``,  ``5.18.1-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.14.0-1``,  ``5.14.0-0``,  ``5.13.0-0``,  ``5.12.3-0``,  ``5.12.2-0``,  ``5.12.1-0``,  ``5.11.2-0``,  ``5.11.1-0``,  ``5.11.0-0``,  ``5.10.0-0``,  ``5.9.1-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.7.4-0``,  ``5.7.1-0``,  ``5.7.0-0``,  ``5.6.0-0``,  ``5.5.4-2``,  ``5.5.4-1``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-0``,  ``5.5.1-0``,  ``5.5.0-0``,  ``5.4.5-0``,  ``5.4.4-1``,  ``5.4.3-1``,  ``5.4.3-0``,  ``5.4.2-1``,  ``5.4.2-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.1-0``,  ``5.3.0-2``,  ``5.3.0-1``,  ``5.3.0-0``,  ``5.2.4-0``,  ``5.2.2-1``,  ``5.2.2-0``,  ``5.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends configargparse: 
   :depends connection_pool: ``>=0.0.3``
   :depends datrie: 
   :depends docutils: 
   :depends filelock: 
   :depends gitpython: 
   :depends jsonschema: 
   :depends nbformat: 
   :depends psutil: 
   :depends pulp: ``>=2.0``
   :depends python: ``>=3.5``
   :depends pyyaml: 
   :depends ratelimiter: 
   :depends requests: ``>=2.8.1``
   :depends setuptools: 
   :depends smart_open: ``>=3.0``
   :depends stopit: 
   :depends tabulate: 
   :depends toposort: 
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake-minimal

   and update with::

      conda update snakemake-minimal

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake-minimal:<tag>

   (see `snakemake-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-minimal| image:: https://img.shields.io/conda/dn/bioconda/snakemake-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-minimal
   :alt:   (downloads)
.. |docker_snakemake-minimal| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake-minimal/tags`: https://quay.io/repository/biocontainers/snakemake-minimal?tab=tags


.. raw:: html

    <script>
        var package = "snakemake";
        var versions = ["6.10.0","6.9.1","6.9.0","6.8.2","6.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake/README.html