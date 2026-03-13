:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pod5'
.. highlight: bash

pod5
====

.. conda:recipe:: pod5
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies Pod5 File Format Python API and Tools.

   :homepage: https://github.com/nanoporetech/pod5-file-format
   :documentation: https://pod5-file-format.readthedocs.io/en/latest
   
   :license: OTHER / MPL-2.0
   :recipe: /`pod5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5/meta.yaml>`_

   POD5 File Format \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   POD5 is a file format for storing nanopore dna data in an easily accessible way. The format is able to be written in a streaming manner which allows a sequencing instrument to directly write the format.
   Data in POD5 is stored using Apache Arrow\, allowing users to consume data in many languages using standard tools.
   What does this project contain \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   This project contains a core library for reading and writing POD5 data\, and a toolkit for accessing this data in other languages.
   Documentation \-\-\-\-\-\-\-\-\-\-\-\-\-
   Full documentation is found at https\:\/\/pod5\-file\-format.readthedocs.io


.. conda:package:: pod5

   |downloads_pod5| |docker_pod5|

   :versions:
      
      

      ``0.3.33-0``,  ``0.3.27-0``,  ``0.3.23-0``,  ``0.3.15-0``

      

   
   :depends on deprecated: 
   :depends on h5py: ``>=3.11``
   :depends on iso8601: 
   :depends on lib-pod5: ``0.3.33``
   :depends on more-itertools: 
   :depends on numpy: ``>=1.21.0``
   :depends on packaging: 
   :depends on polars: ``>=1.20``
   :depends on pyarrow: ``>=18.0.0``
   :depends on python: ``>=3.8``
   :depends on pytz: 
   :depends on tqdm: 
   :depends on vbz-h5py-plugin: 

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

    pixi global install pod5

to add into an existing workspace instead, run::

    pixi add pod5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pod5

Alternatively, to install into a new environment, run::

    conda create -n envname pod5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pod5:<tag>

(see `pod5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pod5| image:: https://img.shields.io/conda/dn/bioconda/pod5.svg?style=flat
   :target: https://anaconda.org/bioconda/pod5
   :alt:   (downloads)
.. |docker_pod5| image:: https://quay.io/repository/biocontainers/pod5/status
   :target: https://quay.io/repository/biocontainers/pod5
.. _`pod5/tags`: https://quay.io/repository/biocontainers/pod5?tab=tags


.. raw:: html

    <script>
        var package = "pod5";
        var versions = ["0.3.33","0.3.27","0.3.23","0.3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pod5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pod5/README.html