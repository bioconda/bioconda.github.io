:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sashimi-py'
.. highlight: bash

sashimi-py
==========

.. conda:recipe:: sashimi-py
   :replaces_section_title:
   :noindex:

   This is an pure Python version of sashimi plot

   :homepage: https://github.com/ygidtu/sashimi.py
   :documentation: https://sashimi.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sashimi-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sashimi-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sashimi-py/meta.yaml>`_

   


.. conda:package:: sashimi-py

   |downloads_sashimi-py| |docker_sashimi-py|

   :versions:
      
      

      ``0.1.5-0``,  ``0.0.4-0``

      

   
   :depends on adjusttext: 
   :depends on cairocffi: 
   :depends on click: 
   :depends on click-option-group: 
   :depends on filetype: 
   :depends on hicmatrix: 
   :depends on loguru: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: 
   :depends on requests: 
   :depends on seaborn-base: 
   :depends on wheel: 
   :depends on xmltodict: 

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

    pixi global install sashimi-py

to add into an existing workspace instead, run::

    pixi add sashimi-py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sashimi-py

Alternatively, to install into a new environment, run::

    conda create -n envname sashimi-py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sashimi-py:<tag>

(see `sashimi-py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sashimi-py| image:: https://img.shields.io/conda/dn/bioconda/sashimi-py.svg?style=flat
   :target: https://anaconda.org/bioconda/sashimi-py
   :alt:   (downloads)
.. |docker_sashimi-py| image:: https://quay.io/repository/biocontainers/sashimi-py/status
   :target: https://quay.io/repository/biocontainers/sashimi-py
.. _`sashimi-py/tags`: https://quay.io/repository/biocontainers/sashimi-py?tab=tags


.. raw:: html

    <script>
        var package = "sashimi-py";
        var versions = ["0.1.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sashimi-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sashimi-py/README.html