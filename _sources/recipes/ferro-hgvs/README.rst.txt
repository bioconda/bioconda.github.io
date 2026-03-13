:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ferro-hgvs'
.. highlight: bash

ferro-hgvs
==========

.. conda:recipe:: ferro-hgvs
   :replaces_section_title:
   :noindex:

   HGVS variant parser and normalizer.

   :homepage: https://github.com/fulcrumgenomics/ferro-hgvs
   :documentation: https://github.com/fulcrumgenomics/ferro-hgvs/blob/v0.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`ferro-hgvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ferro-hgvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ferro-hgvs/meta.yaml>`_

   


.. conda:package:: ferro-hgvs

   |downloads_ferro-hgvs| |docker_ferro-hgvs|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install ferro-hgvs

to add into an existing workspace instead, run::

    pixi add ferro-hgvs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ferro-hgvs

Alternatively, to install into a new environment, run::

    conda create -n envname ferro-hgvs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ferro-hgvs:<tag>

(see `ferro-hgvs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ferro-hgvs| image:: https://img.shields.io/conda/dn/bioconda/ferro-hgvs.svg?style=flat
   :target: https://anaconda.org/bioconda/ferro-hgvs
   :alt:   (downloads)
.. |docker_ferro-hgvs| image:: https://quay.io/repository/biocontainers/ferro-hgvs/status
   :target: https://quay.io/repository/biocontainers/ferro-hgvs
.. _`ferro-hgvs/tags`: https://quay.io/repository/biocontainers/ferro-hgvs?tab=tags


.. raw:: html

    <script>
        var package = "ferro-hgvs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ferro-hgvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ferro-hgvs/README.html