:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'planemo'
.. highlight: bash

planemo
=======

.. conda:recipe:: planemo
   :replaces_section_title:
   :noindex:

   Command\-line utilities to assist in building tools for the Galaxy project \(https\:\/\/galaxyproject.org\).

   :homepage: https://github.com/galaxyproject/planemo
   :documentation: https://planemo.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`planemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo/meta.yaml>`_

   


.. conda:package:: planemo

   |downloads_planemo| |docker_planemo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.75.40-0</code>,  <code>0.75.38-0</code>,  <code>0.75.37-0</code>,  <code>0.75.35-0</code>,  <code>0.75.34-0</code>,  <code>0.75.33-0</code>,  <code>0.75.32-0</code>,  <code>0.75.31-0</code>,  <code>0.75.30-0</code>,  </span></summary>
      

      ``0.75.40-0``,  ``0.75.38-0``,  ``0.75.37-0``,  ``0.75.35-0``,  ``0.75.34-0``,  ``0.75.33-0``,  ``0.75.32-0``,  ``0.75.31-0``,  ``0.75.30-0``,  ``0.75.29-0``,  ``0.75.27-0``,  ``0.75.26-0``,  ``0.75.25-0``,  ``0.75.24-0``,  ``0.75.22-0``,  ``0.75.21-0``,  ``0.75.20-0``,  ``0.75.19-0``,  ``0.75.18-0``,  ``0.75.17-0``,  ``0.75.15-0``,  ``0.75.14-0``,  ``0.75.12-0``,  ``0.75.11-0``,  ``0.75.10-0``,  ``0.75.9-0``,  ``0.75.3-0``,  ``0.74.11-0``,  ``0.74.10-0``,  ``0.74.9-0``,  ``0.74.8-0``,  ``0.74.7-0``,  ``0.74.6-0``,  ``0.74.5-0``,  ``0.74.4-1``,  ``0.74.4-0``,  ``0.74.3-0``,  ``0.74.2-0``,  ``0.74.1-0``,  ``0.74.0-0``,  ``0.73.0-0``,  ``0.72.0-0``,  ``0.70.0-1``,  ``0.70.0-0``,  ``0.62.1-2``,  ``0.62.1-1``,  ``0.62.1-0``,  ``0.61.0-0``,  ``0.60.0-0``,  ``0.59.0-0``,  ``0.57.1-1``,  ``0.57.1-0``,  ``0.57.0-0``,  ``0.56.0-0``,  ``0.55.0-1``,  ``0.55.0-0``,  ``0.54.0-1``,  ``0.48.0-1``,  ``0.48.0-0``,  ``0.46.1-0``,  ``0.40.1-0``,  ``0.38.1-1``,  ``0.34.1-2``,  ``0.34.1-1``,  ``0.34.1-0``,  ``0.33.2-0``,  ``0.29.1-0``,  ``0.23.0-1``,  ``0.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on allure-python-commons: 
   :depends on backports: 
   :depends on backports.strenum: 
   :depends on bioblend: ``>=1.6.0``
   :depends on click: ``!=8.0.2``
   :depends on cryptography: 
   :depends on cwltool: ``>=1.0.20191225192155``
   :depends on ephemeris: ``>=0.10.3``
   :depends on galaxy-job-config-init: ``>=0.1.3``
   :depends on galaxy-tool-util: ``>=24.1,<25.1``
   :depends on galaxy-util: ``>=24.1,<25.1``
   :depends on glob2: 
   :depends on gxformat2: ``>=0.14.0``
   :depends on h5py: 
   :depends on jinja2: 
   :depends on lxml: 
   :depends on oyaml: 
   :depends on pathvalidate: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on tabulate: 
   :depends on virtualenv: 

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

    pixi global install planemo

to add into an existing workspace instead, run::

    pixi add planemo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install planemo

Alternatively, to install into a new environment, run::

    conda create -n envname planemo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/planemo:<tag>

(see `planemo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_planemo| image:: https://img.shields.io/conda/dn/bioconda/planemo.svg?style=flat
   :target: https://anaconda.org/bioconda/planemo
   :alt:   (downloads)
.. |docker_planemo| image:: https://quay.io/repository/biocontainers/planemo/status
   :target: https://quay.io/repository/biocontainers/planemo
.. _`planemo/tags`: https://quay.io/repository/biocontainers/planemo?tab=tags


.. raw:: html

    <script>
        var package = "planemo";
        var versions = ["0.75.40","0.75.38","0.75.37","0.75.35","0.75.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/planemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/planemo/README.html