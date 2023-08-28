:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toil'
.. highlight: bash

toil
====

.. conda:recipe:: toil
   :replaces_section_title:
   :noindex:

   A scalable\, efficient\, cross\-platform and easy\-to\-use workflow engine in pure Python

   :homepage: http://toil.ucsc-cgl.org/
   :documentation: https://toil.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/DataBiosphere/toil
   :license: Apache-2.0
   :recipe: /`toil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil/meta.yaml>`_

   


.. conda:package:: toil

   |downloads_toil| |docker_toil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.12.0-0</code>,  <code>5.11.0-0</code>,  <code>5.9.2-0</code>,  <code>5.7.1-0</code>,  <code>5.6.0-0</code>,  <code>5.5.0-1</code>,  <code>5.5.0-0</code>,  <code>5.4.0-0</code>,  <code>5.3.0-0</code>,  </span></summary>
      

      ``5.12.0-0``,  ``5.11.0-0``,  ``5.9.2-0``,  ``5.7.1-0``,  ``5.6.0-0``,  ``5.5.0-1``,  ``5.5.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-0``,  ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.24.0-0``,  ``3.23.1-0``,  ``3.21.0-0``,  ``3.20.0-0``,  ``3.14.0-2``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0a1-0``,  ``3.11.0-1``,  ``3.11.0-0``,  ``3.11.0a1-1``,  ``3.11.0a1-0``,  ``3.10.0-0``,  ``3.10.0a1-1``,  ``3.10.0a1-0``,  ``3.9.0a1-0``,  ``3.8.0a1-1``,  ``3.8.0a1-0``,  ``3.7.0a-1``,  ``3.7.0a-0``,  ``3.6.0-0``,  ``3.5.0a1-3``,  ``3.5.0a1-2``,  ``3.5.0a1-1``,  ``3.5.0a1-0``,  ``3.4.0a1-3``,  ``3.4.0a1-2``,  ``3.4.0a1-1``,  ``3.4.0a1-0``,  ``3.3.0a1-0``,  ``3.2.0a2-2``,  ``3.2.0a2-0``

      
      .. raw:: html

         </details>
      

   
   :depends addict: ``>=2.2.1``
   :depends apache-libcloud: ``>=2.2.1``
   :depends cwltool: ``3.1.20230601100705``
   :depends dill: ``>=0.3.2``
   :depends docker-py: ``>=3.7.2,<6``
   :depends enlighten: ``>=1.5.2``
   :depends galaxy-tool-util: 
   :depends google-cloud-storage: ``>=2,<=2.8.0``
   :depends idna: ``>=2``
   :depends mock: ``>=4.0.3``
   :depends networkx: ``>=2,<2.8.9``
   :depends psutil: ``>=3.0.1``
   :depends pynacl: ``>=1.4.0``
   :depends pypubsub: ``>=4.0.3``
   :depends python: ``>=3.7``
   :depends python-dateutil: 
   :depends python-htcondor: ``>=10.2.0.post1``
   :depends python-kubernetes: ``>=12.0.1,<22``
   :depends pytz: ``>=2012``
   :depends requests: ``>=2``
   :depends ruamel.yaml: ``>=0.15,<=0.17.21``
   :depends ruamel.yaml.clib: ``>=0.2.6``
   :depends schema-salad: ``>=8.4.20230128170514``
   :depends typing-extensions: 
   :depends urllib3: ``>=1.26.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install toil

   and update with::

      mamba update toil

  To create a new environment, run::

      mamba create --name myenvname toil

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/toil:<tag>

   (see `toil/tags`_ for valid values for ``<tag>``)


.. |downloads_toil| image:: https://img.shields.io/conda/dn/bioconda/toil.svg?style=flat
   :target: https://anaconda.org/bioconda/toil
   :alt:   (downloads)
.. |docker_toil| image:: https://quay.io/repository/biocontainers/toil/status
   :target: https://quay.io/repository/biocontainers/toil
.. _`toil/tags`: https://quay.io/repository/biocontainers/toil?tab=tags


.. raw:: html

    <script>
        var package = "toil";
        var versions = ["5.12.0","5.11.0","5.9.2","5.7.1","5.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toil/README.html