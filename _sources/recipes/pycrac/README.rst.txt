:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycrac'
.. highlight: bash

pycrac
======

.. conda:recipe:: pycrac
   :replaces_section_title:
   :noindex:

   Python NextGen sequencing data processing software

   :homepage: http://sandergranneman.bio.ed.ac.uk/Granneman_Lab/pyCRAC_software.html
   :license: Apache / Apache-2.0
   :recipe: /`pycrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycrac/meta.yaml>`_

   


.. conda:package:: pycrac

   |downloads_pycrac| |docker_pycrac|

   :versions:
      
      

      ``1.5.2-0``,  ``1.5.1-0``

      

   
   :depends on numpy: ``>=1.5.1``
   :depends on pysam: ``>=0.6``
   :depends on python: 
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

    pixi global install pycrac

to add into an existing workspace instead, run::

    pixi add pycrac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pycrac

Alternatively, to install into a new environment, run::

    conda create -n envname pycrac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pycrac:<tag>

(see `pycrac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pycrac| image:: https://img.shields.io/conda/dn/bioconda/pycrac.svg?style=flat
   :target: https://anaconda.org/bioconda/pycrac
   :alt:   (downloads)
.. |docker_pycrac| image:: https://quay.io/repository/biocontainers/pycrac/status
   :target: https://quay.io/repository/biocontainers/pycrac
.. _`pycrac/tags`: https://quay.io/repository/biocontainers/pycrac?tab=tags


.. raw:: html

    <script>
        var package = "pycrac";
        var versions = ["1.5.2","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycrac/README.html