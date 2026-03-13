:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencove'
.. highlight: bash

gencove
=======

.. conda:recipe:: gencove
   :replaces_section_title:
   :noindex:

   Gencove is a high\-throughput\, cost\-effective platform for genome sequencing and analysis. This command\-line interface can be used to easily access the Gencove API.

   :homepage: https://docs.gencove.com
   :developer docs: https://github.com/gncv/gencove-cli
   :license: APACHE / Apache-2.0
   :recipe: /`gencove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove/meta.yaml>`_

   


.. conda:package:: gencove

   |downloads_gencove| |docker_gencove|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.24.3-0</code>,  <code>2.24.2-0</code>,  </span></summary>
      

      ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.24.3-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.23.1-0``,  ``2.23.0-0``,  ``2.21.0-0``,  ``2.20.2-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.5-0``,  ``2.18.3-0``,  ``2.18.2-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on backoff: ``<=2.2.1``
   :depends on boto3: ``>=1.17.97``
   :depends on click: ``>=7.0``
   :depends on click-default-group: ``>=1.2.4``
   :depends on progressbar2: ``3.55.0``
   :depends on pydantic: ``1.10.13``
   :depends on python: ``>=3.7``
   :depends on python-dateutil: ``>=2.2.0``
   :depends on requests: ``>=2.19.1``
   :depends on sh: ``>=1.14.3``
   :depends on six: ``>=1.5``

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

    pixi global install gencove

to add into an existing workspace instead, run::

    pixi add gencove

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gencove

Alternatively, to install into a new environment, run::

    conda create -n envname gencove

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gencove:<tag>

(see `gencove/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gencove| image:: https://img.shields.io/conda/dn/bioconda/gencove.svg?style=flat
   :target: https://anaconda.org/bioconda/gencove
   :alt:   (downloads)
.. |docker_gencove| image:: https://quay.io/repository/biocontainers/gencove/status
   :target: https://quay.io/repository/biocontainers/gencove
.. _`gencove/tags`: https://quay.io/repository/biocontainers/gencove?tab=tags


.. raw:: html

    <script>
        var package = "gencove";
        var versions = ["4.2.0","4.1.0","4.0.1","3.2.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencove/README.html