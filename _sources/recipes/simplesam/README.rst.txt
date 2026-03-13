:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simplesam'
.. highlight: bash

simplesam
=========

.. conda:recipe:: simplesam
   :replaces_section_title:
   :noindex:

   Simple pure Python SAM parser and objects for working with SAM records

   :homepage: http://mattshirley.com
   :documentation: http://simplesam.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/mdshw5/simplesam
   :license: MIT
   :recipe: /`simplesam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam/meta.yaml>`_

   


.. conda:package:: simplesam

   |downloads_simplesam| |docker_simplesam|

   :versions:
      
      

      ``0.1.4.1-0``,  ``0.1.4.0-0``,  ``0.1.3.2-0``,  ``0.1.3.1-1``,  ``0.1.3.1-0``

      

   
   :depends on python: 
   :depends on setuptools: 
   :depends on six: 

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

    pixi global install simplesam

to add into an existing workspace instead, run::

    pixi add simplesam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install simplesam

Alternatively, to install into a new environment, run::

    conda create -n envname simplesam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/simplesam:<tag>

(see `simplesam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_simplesam| image:: https://img.shields.io/conda/dn/bioconda/simplesam.svg?style=flat
   :target: https://anaconda.org/bioconda/simplesam
   :alt:   (downloads)
.. |docker_simplesam| image:: https://quay.io/repository/biocontainers/simplesam/status
   :target: https://quay.io/repository/biocontainers/simplesam
.. _`simplesam/tags`: https://quay.io/repository/biocontainers/simplesam?tab=tags


.. raw:: html

    <script>
        var package = "simplesam";
        var versions = ["0.1.4.1","0.1.4.0","0.1.3.2","0.1.3.1","0.1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simplesam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simplesam/README.html