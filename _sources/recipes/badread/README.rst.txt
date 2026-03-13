:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'badread'
.. highlight: bash

badread
=======

.. conda:recipe:: badread
   :replaces_section_title:
   :noindex:

   A long read simulator that can imitate many types of read problems

   :homepage: https://github.com/rrwick/Badread
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`badread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread/meta.yaml>`_

   


.. conda:package:: badread

   |downloads_badread| |docker_badread|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.5-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pip: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on scipy: 

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

    pixi global install badread

to add into an existing workspace instead, run::

    pixi add badread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install badread

Alternatively, to install into a new environment, run::

    conda create -n envname badread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/badread:<tag>

(see `badread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_badread| image:: https://img.shields.io/conda/dn/bioconda/badread.svg?style=flat
   :target: https://anaconda.org/bioconda/badread
   :alt:   (downloads)
.. |docker_badread| image:: https://quay.io/repository/biocontainers/badread/status
   :target: https://quay.io/repository/biocontainers/badread
.. _`badread/tags`: https://quay.io/repository/biocontainers/badread?tab=tags


.. raw:: html

    <script>
        var package = "badread";
        var versions = ["0.4.1","0.4.0","0.4.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/badread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/badread/README.html