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
   :documentation: https://ephemeris.readthedocs.io/en/latest
   
   :license: OTHER / Academic Free License (AFL)
   :recipe: /`ephemeris <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ephemeris>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ephemeris/meta.yaml>`_

   


.. conda:package:: ephemeris

   |downloads_ephemeris| |docker_ephemeris|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.11-0</code>,  <code>0.10.10-0</code>,  <code>0.10.9-0</code>,  <code>0.10.8-0</code>,  <code>0.10.7-0</code>,  <code>0.10.6-2</code>,  <code>0.10.6-1</code>,  <code>0.10.6-0</code>,  <code>0.10.5-0</code>,  </span></summary>
      

      ``0.10.11-0``,  ``0.10.10-0``,  ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.7-0``,  ``0.10.6-2``,  ``0.10.6-1``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-2``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioblend: ``>=0.10.0``
   :depends on galaxy-tool-util: ``>=20.9.1``
   :depends on galaxy-util: ``>=20.9.0``
   :depends on jinja2: 
   :depends on pydantic: ``>=2.0``
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on pyyaml: 
   :depends on rich: 
   :depends on setuptools: 
   :depends on six: ``>=1.9.0``

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

    pixi global install ephemeris

to add into an existing workspace instead, run::

    pixi add ephemeris

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ephemeris

Alternatively, to install into a new environment, run::

    conda create -n envname ephemeris

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ephemeris:<tag>

(see `ephemeris/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ephemeris| image:: https://img.shields.io/conda/dn/bioconda/ephemeris.svg?style=flat
   :target: https://anaconda.org/bioconda/ephemeris
   :alt:   (downloads)
.. |docker_ephemeris| image:: https://quay.io/repository/biocontainers/ephemeris/status
   :target: https://quay.io/repository/biocontainers/ephemeris
.. _`ephemeris/tags`: https://quay.io/repository/biocontainers/ephemeris?tab=tags


.. raw:: html

    <script>
        var package = "ephemeris";
        var versions = ["0.10.11","0.10.10","0.10.9","0.10.8","0.10.7"];
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