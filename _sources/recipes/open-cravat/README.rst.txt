:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'open-cravat'
.. highlight: bash

open-cravat
===========

.. conda:recipe:: open-cravat
   :replaces_section_title:
   :noindex:

   OpenCRAVAT \- variant analysis toolkit

   :homepage: https://www.opencravat.org
   :documentation: https://github.com/KarchinLab/open-cravat/wiki
   
   :developer docs: https://github.com/KarchinLab/open-cravat
   :license: MIT / MIT
   :recipe: /`open-cravat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat/meta.yaml>`_

   


.. conda:package:: open-cravat

   |downloads_open-cravat| |docker_open-cravat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.15.0-0</code>,  <code>2.13.0-0</code>,  <code>2.12.0-0</code>,  <code>2.11.1-0</code>,  <code>2.11.0-0</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.15.0-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiohttp: ``<4.0.0``
   :depends on aiosqlite: 
   :depends on biopython: 
   :depends on chardet: ``>=3.0.4``
   :depends on intervaltree: 
   :depends on markdown: 
   :depends on mpmath: 
   :depends on nest-asyncio: 
   :depends on openpyxl: 
   :depends on oyaml: 
   :depends on psutil: 
   :depends on pyliftover: 
   :depends on python: ``>=3.9``
   :depends on pyvcf3: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on requests-toolbelt: 
   :depends on setuptools: 
   :depends on twobitreader: 
   :depends on websockets: 
   :depends on xlsxwriter: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install open-cravat

to add into an existing workspace instead, run::

    pixi add open-cravat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install open-cravat

Alternatively, to install into a new environment, run::

    conda create -n envname open-cravat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/open-cravat:<tag>

(see `open-cravat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_open-cravat| image:: https://img.shields.io/conda/dn/bioconda/open-cravat.svg?style=flat
   :target: https://anaconda.org/bioconda/open-cravat
   :alt:   (downloads)
.. |docker_open-cravat| image:: https://quay.io/repository/biocontainers/open-cravat/status
   :target: https://quay.io/repository/biocontainers/open-cravat
.. _`open-cravat/tags`: https://quay.io/repository/biocontainers/open-cravat?tab=tags


.. raw:: html

    <script>
        var package = "open-cravat";
        var versions = ["2.16.0","2.15.0","2.13.0","2.12.0","2.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/open-cravat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/open-cravat/README.html