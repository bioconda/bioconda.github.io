:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scop3p'
.. highlight: bash

scop3p
======

.. conda:recipe:: scop3p
   :replaces_section_title:
   :noindex:

   The official Scop3P REST API Python client

   :homepage: https://iomics.ugent.be/scop3p/
   :documentation: https://iomics.ugent.be/scop3p/documentation
   
   :developer docs: https://github.com/Bio2Byte/scop3p-api-client
   :license: Apache-2.0
   :recipe: /`scop3p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scop3p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scop3p/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.18909477`, doi: :doi:`10.1021/acs.jproteome.0c00306`

   Scop3P provides a unique and powerful resource to explore and understand the
   impact of phospho\-sites on human protein structure and function\,
   and can thus serve as a springboard for researchers seeking to analyse and\,
   interpret a given phospho\-site or phosphoprotein in a structural\, biophysical\,
   and biological context.



.. conda:package:: scop3p

   |downloads_scop3p| |docker_scop3p|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on python: ``>=3.6``
   :depends on requests: ``>=2.0``

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

    pixi global install scop3p

to add into an existing workspace instead, run::

    pixi add scop3p

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scop3p

Alternatively, to install into a new environment, run::

    conda create -n envname scop3p

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scop3p:<tag>

(see `scop3p/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scop3p| image:: https://img.shields.io/conda/dn/bioconda/scop3p.svg?style=flat
   :target: https://anaconda.org/bioconda/scop3p
   :alt:   (downloads)
.. |docker_scop3p| image:: https://quay.io/repository/biocontainers/scop3p/status
   :target: https://quay.io/repository/biocontainers/scop3p
.. _`scop3p/tags`: https://quay.io/repository/biocontainers/scop3p?tab=tags


.. raw:: html

    <script>
        var package = "scop3p";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scop3p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scop3p/README.html