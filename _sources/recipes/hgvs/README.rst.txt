:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hgvs'
.. highlight: bash

hgvs
====

.. conda:recipe:: hgvs
   :replaces_section_title:
   :noindex:

   HGVS Parser\, Formatter\, Mapper\, and Validator.

   :homepage: https://github.com/biocommons/hgvs
   :documentation: https://hgvs.readthedocs.io
   
   :license: Apache-2.0
   :recipe: /`hgvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgvs/meta.yaml>`_

   


.. conda:package:: hgvs

   |downloads_hgvs| |docker_hgvs|

   :versions:
      
      

      ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.2-0``,  ``1.5.1-0``

      

   
   :depends on attrs: ``>=17.4.0``
   :depends on biocommons.seqrepo: ``>=0.6.11``
   :depends on bioutils: ``>=0.4.0,<1.0``
   :depends on configparser: ``>=3.3.0``
   :depends on importlib-resources: 
   :depends on ipython: 
   :depends on parsley: 
   :depends on pre-commit: ``>=3.4``
   :depends on psycopg2-binary: 
   :depends on python: ``>=3.10``

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

    pixi global install hgvs

to add into an existing workspace instead, run::

    pixi add hgvs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hgvs

Alternatively, to install into a new environment, run::

    conda create -n envname hgvs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hgvs:<tag>

(see `hgvs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hgvs| image:: https://img.shields.io/conda/dn/bioconda/hgvs.svg?style=flat
   :target: https://anaconda.org/bioconda/hgvs
   :alt:   (downloads)
.. |docker_hgvs| image:: https://quay.io/repository/biocontainers/hgvs/status
   :target: https://quay.io/repository/biocontainers/hgvs
.. _`hgvs/tags`: https://quay.io/repository/biocontainers/hgvs?tab=tags


.. raw:: html

    <script>
        var package = "hgvs";
        var versions = ["1.5.6","1.5.5","1.5.4","1.5.2","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgvs/README.html